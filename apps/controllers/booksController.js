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
exports.getAllBooks = (req, res) => {
    // Implementa la lógica para obtener todos los libros
    res.status(200).json([{ id: 1, title: 'Libro Ejemplo' }]);
  };
  
  exports.getBookById = (req, res) => {
    const { id } = req.params;
    // Implementa la lógica para obtener un libro por ID
    res.status(200).json({ id, title: 'Libro Ejemplo' });
  };
  
  