const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'API para una tienda de ecommerce',
      contact: {
        name: 'Tu Nombre',
        email: 'tucorreo@example.com'
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

console.log('Swagger Docs:', swaggerDocs);
