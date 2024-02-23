// Importing mongoose for MongoDB object modeling
const mongoose = require('mongoose');

// Defining the schema for products
const Schema = mongoose.Schema;

// Creating a new schema for products with necessary fields
const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    published: { type: Boolean, required: true },
    category: { type: String, required: true },
});

// Exporting the product model based on the schema
module.exports = mongoose.model('Product', productSchema);
