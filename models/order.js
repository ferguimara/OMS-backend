const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: String,
    product: String,
    price: String,
    status: {
        type: String,
        enum: ['For Sale', 'Out of Stock', 'Pending']
    }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);