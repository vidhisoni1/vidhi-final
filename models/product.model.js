const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  },
  price: Number,
  description: String,
  image: String
})

module.exports = mongoose.model('products', productSchema)