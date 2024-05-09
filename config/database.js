const mongoose = require('mongoose')

const db = async ()=>{
    await mongoose.connect(
        'mongodb+srv://vidhisoni8869:SCZdHQSm49NJtlu9@cluster0.va1rnsy.mongodb.net/mydatabase'
    );
    console.log('database connected')
}
module.exports = db ;