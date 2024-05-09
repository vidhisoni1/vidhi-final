const extraCategory =require('../models/extra.model')


const create = async(req,res) => {
    console.log(req.body);
    let data = await extraCategory.find().populate('extraId');
    res.send(data)
}
module.exports = {create};