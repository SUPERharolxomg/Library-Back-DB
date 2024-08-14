const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Operaciones relacionadas con autenticación
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login de usuario
 *     description: Inicia sesión con nombre de usuario y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario para el login
 *                 example: user1
 *               password:
 *                 type: string
 *                 description: Contraseña para el login
 *                 example: pass123
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de autenticación generado
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: Credenciales incorrectas
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Registro de usuario
 *     description: Registra un nuevo usuario en la aplicación.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: pass123
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *                 example: John Doe
 *               phone:
 *                 type: string
 *                 description: Número de celular del usuario
 *                 example: "1234567890"
 *               address:
 *                 type: string
 *                 description: Dirección del usuario
 *                 example: "1234 Elm Street"
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                   example: "Usuario registrado exitosamente"
 *       400:
 *         description: Datos inválidos o duplicados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Descripción del error
 *                   example: "El correo ya existe"
 *       500:
 *         description: Error en la base de datos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Descripción del error
 *                   example: "Error en la base de datos"
 */

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
