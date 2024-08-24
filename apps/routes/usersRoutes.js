const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtener todos los usuarios
 *     description: Devuelve una lista de todos los usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idUser:
 *                     type: string
 *                     description: ID del usuario
 *                   client_name:
 *                     type: string
 *                     description: Nombre del cliente
 *                   phone:
 *                     type: string
 *                     description: Teléfono del cliente
 *                   email:
 *                     type: string
 *                     description: Email del cliente
 *                   address:
 *                     type: string
 *                     description: Dirección del cliente
 */

/**
 * @swagger
 * /users/{idUser}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtener un usuario por ID
 *     description: Devuelve un usuario específico por su ID.
 *     parameters:
 *       - name: idUser
 *         in: path
 *         required: true
 *         description: ID del usuario a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idUser:
 *                   type: string
 *                   description: ID del usuario
 *                 client_name:
 *                   type: string
 *                   description: Nombre del cliente
 *                 phone:
 *                   type: string
 *                   description: Teléfono del cliente
 *                 email:
 *                   type: string
 *                   description: Email del cliente
 *                 address:
 *                   type: string
 *                   description: Dirección del cliente
 *       404:
 *         description: Usuario no encontrado
 */

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Crear un nuevo usuario
 *     description: Crea un nuevo usuario con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client_name:
 *                 type: string
 *                 description: Nombre del cliente
 *               phone:
 *                 type: string
 *                 description: Teléfono del cliente
 *               email:
 *                 type: string
 *                 description: Email del cliente
 *               address:
 *                 type: string
 *                 description: Dirección del cliente
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @swagger
 * /users/{idUser}:
 *   patch:
 *     tags:
 *       - Users
 *     summary: Actualizar un usuario por ID
 *     description: Actualiza la información de un usuario específico por su ID.
 *     parameters:
 *       - name: idUser
 *         in: path
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client_name:
 *                 type: string
 *                 description: Nombre del cliente
 *               phone:
 *                 type: string
 *                 description: Teléfono del cliente
 *               email:
 *                 type: string
 *                 description: Email del cliente
 *               address:
 *                 type: string
 *                 description: Dirección del cliente
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       400:
 *         description: Error en la solicitud
 */

/**
 * @swagger
 * /users/{idUser}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Eliminar un usuario por ID
 *     description: Elimina un usuario específico por su ID.
 *     parameters:
 *       - name: idUser
 *         in: path
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */

router.get('/:idUser', usersController.getUserById);
router.patch('/:idUser', usersController.updateUser);


module.exports = router;
