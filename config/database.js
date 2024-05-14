const mongoose = require('mongoose')

const db = async () => {
    await mongoose.connect(
        'mongodb://localhost:27017/vidhipr'
    );
    console.log('database connected')
}
module.exports = db;