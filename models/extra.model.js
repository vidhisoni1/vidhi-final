const mongoose = require('mongoose')

 const extraCategorySchema = new mongoose.Schema({
    name: String 
 })
 
 const extraCategory = mongoose.model('extraCategory', extraCategorySchema)
 
 module.exports = extraCategory