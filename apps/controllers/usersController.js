const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eccomerce'
});

//Metodo para consultar un cliente por su id
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

// Metodo para actualizar los datos de un usuario por el id
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

//Metodo para eliminar los registro de el usuario tanto en la tabla de login como en client
const deleteUser = (req, res) => {
  const { idUser } = req.params;
  const query = `DELETE FROM login WHERE client_id = ?`;
  pool.execute(query, [idUser], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar registros dependientes' });
    }
    const query2 = `DELETE FROM client WHERE id_client = ?`;
    pool.execute(query2, [idUser], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error al eliminar usuario' });
      }
      res.json({ message: 'Usuario eliminado con éxito' });
    });
  });
};

module.exports = { getUserById, updateUser, deleteUser };

