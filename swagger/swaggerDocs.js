const swaggerJsDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Ecommerce API',
    version: '1.0.0',
    description: 'API para una tienda de libros',
    contact: {
      name: 'Harold David Garces Casas',
      email: 'davidgarces171@example.com'
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  tags: [
    {
      name: 'Auth',
      description: 'Operaciones relacionadas con autenticación'
    },
    {
      name: 'Books',
      description: 'Operaciones relacionadas con libros'
    },
    {
      name: 'Orders',
      description: 'Operaciones relacionadas con órdenes'
    },
    {
      name: 'Users',
      description: 'Operaciones relacionadas con usuarios'
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./docs/**/*.yaml'], // Ruta a los archivos YAML con la documentación
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
