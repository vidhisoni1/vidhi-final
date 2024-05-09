const mongoose = require('mongoose')

 const categorySchema = new mongoose.Schema({
    name: String, 
    subId :{
      type : mongoose.Schema.Types.ObjectId,
      ref:'subcategory'
    }
    
 })
 
 const category = mongoose.model('category', categorySchema)
 
 module.exports = category