const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eccomerce'
});
/**
 * @swagger
 * /books:
 *   get:
 *     summary: Obtiene todos los libros
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Lista de libros
 */

const getAllBooks = (req, res) => {
  const query = 'SELECT * FROM books';


  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error en la consulta de la base de datos:", err); // Agrega un console.error para depuración
      return res.status(500).json({ error: "Error en la base de datos" });
    }

    // Envía los resultados al cliente
    res.status(200).json(results);
  });
};
module.exports ={ getAllBooks }
  