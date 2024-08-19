const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eccomerce'
});

const login = (req, res) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return res.status(400).json({ error: "Email y contraseña son requeridos" });
  }

  const query = 'SELECT * FROM login WHERE email = ?';

  pool.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error en la consulta de la base de datos:", err); 
      return res.status(500).json({ error: "Error en la base de datos" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Password o Email incorrecto" });
    }

    const user = results[0];

    // Verifica la contraseña con bcrypt
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Error al comparar la contraseña:", err); 
        return res.status(500).json({ error: "Error al verificar la contraseña" });
      }

      if (!isMatch) {
        return res.status(401).json({ error: "Password o Email incorrecto" });
      }

      res.status(200).json({ message: "Login exitoso", user: user.email });
    });
  });
};
const register = (req, res) => {
  const { email, password, name, phone, address } = req.body;

  if (!email || !password || !name || !phone || !address) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const queryCheck = `
    SELECT * FROM client WHERE client_name = ? OR phone = ? OR email = ?
  `;

  pool.query(queryCheck, [name, phone, email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error en la base de datos" });
    }

    if (results.length > 0) {
      const existing = results[0];
      if (existing.email === email) {
        return res.status(400).json({ error: "El correo ya existe" });
      }
      if (existing.client_name === name) {
        return res.status(400).json({ error: "El nombre ya existe" });
      }
      if (existing.phone === phone) {
        return res.status(400).json({ error: "El número de celular ya existe" });
      }
    }

    // Si no existen, procede con la inserción
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: "Error al encriptar la contraseña" });
      }

      // Inserta en la tabla `client`
      const queryClient = 'INSERT INTO client (client_name, phone, address, email) VALUES (?, ?, ?, ?)';

      pool.query(queryClient, [name, phone, address, email], (err, resultClient) => {
        if (err) {
          return res.status(500).json({ error: "Error en la base de datos al insertar en client" });
        }

       // Realiza una consulta para obtener el `client_id` insertado
       const queryGetClientId = 'SELECT id_client FROM client WHERE client_name = ? AND phone = ? AND address = ?';

       pool.query(queryGetClientId, [name, phone, address], (err, clientResults) => {
         if (err) {
           return res.status(500).json({ error: "Error en la base de datos al obtener client_id" });
         }

         const clientId = clientResults[0].id_client;

         // Inserta en la tabla `login` con el `client_id` obtenido
         const queryLogin = 'INSERT INTO login (email, password, client_id) VALUES (?, ?, ?)';

         pool.query(queryLogin, [email, hash, clientId], (err) => {
           if (err) {
             return res.status(500).json({ error: "Error en la base de datos al insertar en login" });
           }

           res.status(201).json({ message: "Usuario registrado exitosamente" });
         });
       });
     });
   });
 });
};
module.exports = { login, register };
