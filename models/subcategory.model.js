const mongoose = require('mongoose')

 const subcategorySchema = new mongoose.Schema({
    name: String ,
    extraId :{
      type : mongoose.Schema.Types.ObjectId,
      ref:'subcategory'
    }
 })
 
 const subcategory = mongoose.model('subcategory', subcategorySchema)
 
 module.exports = subcategory