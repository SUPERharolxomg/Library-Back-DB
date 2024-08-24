const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eccomerce'
});

const getUserById = (req, res) => {
  const { idUser } = req.params;
  const query = `SELECT * FROM client WHERE id_client = ?`;
  pool.execute(query, [idUser], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener usuario' });
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.json(results[0]);
    }
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  const { client_name, phone, email, address } = req.body;
  
  const query = `
    UPDATE client 
    SET client_name = ?, phone = ?, email = ?, address = ?
    WHERE id_client = ?
  `;
  
  pool.execute(query, [client_name, phone, email, address, idUser], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar usuario' });
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    } else {
      res.json({ message: 'Usuario actualizado con éxito' });
    }
  });
};

module.exports = { getUserById, updateUser };
