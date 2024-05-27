const mongoose = require('mongoose')

const db = async () => {
    await mongoose.connect(
        'mongodb+srv://vidhisoni8869:YCiicUVdFM7zDhOj@cluster0.va1rnsy.mongodb.net/final-pr'
    );
    console.log('database connected')
}
module.exports = db;