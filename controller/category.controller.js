const category = require('../models/category.model')


const addCat = async (req, res) => {
    res.render('pages/addCat')
}
const create = async (req, res) => {
    let data = await category.create(req.body);
    res.redirect('/category')
}


const update = async (req, res) => {
    const { id } = req.params
    let data = await category.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.send(data)
}
const get = async (req, res) => {
    let data = await category.find().populate('subId');
    res.render('pages/category', { data })
}
const deleteAll = async (req, res) => {
    let data = await category.deleteMany();
    res.send(data)
}
module.exports = { addCat, create, update, get, deleteAll };

