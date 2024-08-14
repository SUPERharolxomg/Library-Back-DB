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
 *                   idBooks:
 *                     type: string
 *                     description: ID del libro
 *                   Books_name:
 *                     type: string
 *                     description: Nombre del libro
 *                   price:
 *                     type: integer
 *                     description: Precio del libro
 *                   author_libr:
 *                     type: string
 *                     description: Autor del libro
 *                   image:
 *                     type: string
 *                     description: Ruta de la imagen del libro
 *                   description:
 *                     type: string
 *                     description: Descripción del libro
 *                   stars:
 *                     type: integer
 *                     description: Número de estrellas del libro
 */

/**
 * @swagger
 * /books/{idBooks}:
 *   get:
 *     tags:
 *       - Books
 *     summary: Obtener un libro por ID
 *     description: Devuelve un libro específico por su ID.
 *     parameters:
 *       - name: idBooks
 *         in: path
 *         required: true
 *         description: ID del libro a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idBooks:
 *                   type: string
 *                   description: ID del libro
 *                 Books_name:
 *                   type: string
 *                   description: Nombre del libro
 *                 price:
 *                   type: integer
 *                   description: Precio del libro
 *                 author_libr:
 *                   type: string
 *                   description: Autor del libro
 *                 image:
 *                   type: string
 *                   description: Ruta de la imagen del libro
 *                 description:
 *                   type: string
 *                   description: Descripción del libro
 *                 stars:
 *                   type: integer
 *                   description: Número de estrellas del libro
 *       404:
 *         description: Libro no encontrado
 */

router.get('/Books', booksController.getAllBooks);

module.exports = router;
