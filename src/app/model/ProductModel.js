const mongoose = require('mongoose');
const shortid = require('shortid');

const ProductSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            default: shortid.generate
        },
        price: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", ProductSchema);