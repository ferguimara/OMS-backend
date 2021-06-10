const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: String,
    product: String,
    price: String,
    status: String,
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);