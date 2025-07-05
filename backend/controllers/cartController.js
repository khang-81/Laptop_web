const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Thêm sản phẩm vào giỏ hàng
exports.addToCart = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    const userId = req.user.id;

    // Kiểm tra sản phẩm tồn tại
    const product = await Product.findByPk(product_id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Kiểm tra đã có trong giỏ hàng chưa
    let cartItem = await Cart.findOne({
      where: { user_id: userId, product_id }
    });

    if (cartItem) {
      // Cập nhật số lượng nếu đã có
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Thêm mới nếu chưa có
      cartItem = await Cart.create({
        user_id: userId,
        product_id,
        quantity
      });
    }

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xem giỏ hàng
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
      where: { user_id: req.user.id },
      include: [{
        model: Product,
        as: 'product'
      }]
    });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa sản phẩm khỏi giỏ hàng
exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cart.destroy({
      where: { id, user_id: req.user.id }
    });
    
    if (deleted) {
      return res.json({ message: 'Cart item removed' });
    }
    res.status(404).json({ message: 'Cart item not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};