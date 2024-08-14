const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

/**
 * @swagger
 * tags:
 *   - name: Books
 *     description: Operaciones relacionadas con libros
 */

/**
 * @swagger
 * /books:
 *   get:
 *     tags:
 *       - Books
 *     summary: Obtener todos los libros
 *     description: Devuelve una lista de todos los libros.
 *     responses:
 *       200:
 *         description: Lista de libros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                     example: Libro Ejemplo
 */
router.get('/', booksController.getAllBooks);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     tags:
 *       - Books
 *     summary: Obtener un libro por ID
 *     description: Devuelve un libro específico por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Libro encontrado
 *       404:
 *         description: Libro no encontrado
 */
router.get('/:id', booksController.getBookById);

module.exports = router;
