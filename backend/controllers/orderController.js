// controllers/orderController.js
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Product = require('../models/Product');

// Create new order
exports.createOrder = async (req, res) => {
  try {
    const { customer_name, customer_email, items } = req.body;

    // Calculate total amount
    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findByPk(item.product_id);
      if (!product) {
        return res.status(404).json({ message: `Product with ID ${item.product_id} not found` });
      }
      if (product.stock_quantity < item.quantity) {
        return res.status(400).json({ message: `Not enough stock for product ${product.product_name}` });
      }
      totalAmount += product.price * item.quantity;
      orderItems.push({
        product_id: item.product_id,
        quantity: item.quantity,
        price: product.price
      });
    }

    // Create order
    const order = await Order.create({
      customer_name,
      customer_email,
      total_amount: totalAmount
    });

    // Create order items and update product stock
    for (const item of orderItems) {
      await OrderItem.create({
        order_id: order.order_id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price
      });

      // Update product stock
      const product = await Product.findByPk(item.product_id);
      await product.update({
        stock_quantity: product.stock_quantity - item.quantity
      });
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [{
        model: OrderItem,
        as: 'items',
        include: [{
          model: Product,
          as: 'product'
        }]
      }]
    });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{
        model: OrderItem,
        as: 'items',
        include: [{
          model: Product,
          as: 'product'
        }]
      }]
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
