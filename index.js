const express = require('express');
const dotenv = require('dotenv');
const cors = require ('cors');
const { swaggerUi, swaggerDocs } = require('./swagger/swaggerConfig');



dotenv.config();

// Crear la aplicación Express
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200', 
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization' 
}));

// Rutas
const authRoutes = require('./apps/routes/authRoutes');
const booksRoutes = require('./apps/routes/booksRoutes');
const ordersRoutes = require('./apps/routes/ordersRoutes');
const paymentsRoutes = require('./apps/routes/paymentsRoutes');

app.use('/auth', authRoutes);
app.use('/books', booksRoutes);
app.use('/orders', ordersRoutes);
app.use('/payments', paymentsRoutes);

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentación de la API en http://localhost:${port}/api-docs`);
});
