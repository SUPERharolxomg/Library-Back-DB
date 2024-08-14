/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Crear una orden de compra
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Orden creada
 */
exports.createOrder = (req, res) => {
    const { bookId, quantity } = req.body;
    // Implementa la lógica para crear una nueva orden
    res.status(201).json({ message: 'Orden creada', bookId, quantity });
  };
  
  exports.getOrderById = (req, res) => {
    const { id } = req.params;
    // Implementa la lógica para obtener una orden por ID
    res.status(200).json({ id, status: 'Pendiente' });
  };
  
  