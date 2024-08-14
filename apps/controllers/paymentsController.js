/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Procesar un pago
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: integer
 *               paymentMethod:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pago procesado
 */
exports.processPayment = (req, res) => {
    const { orderId, amount } = req.body;
    // Implementa la lógica para procesar un pago
    res.status(200).json({ message: 'Pago procesado', orderId, amount });
  };
  
  