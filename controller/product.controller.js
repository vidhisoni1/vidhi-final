const product = require('../models/product.model')


const addCat = async (req, res) => {
    res.render('pages/addProduct')
}
const create = async (req, res) => {
    let data = await product.create(req.body);
    res.redirect('/product')
}

const update = async (req, res) => {
    const { id } = req.params
    let data = await product.findByIdAndUpdate(id, req.body);
    res.redirect('/product')
}
const get = async (req, res) => {
    let data = await product.find();
    res.render('pages/product', { data })
}
const remove = async (req, res) => {
    const id = req.params.id
    let data = await product.findByIdAndDelete(id);
    res.redirect('/product')
}

const getEdit = async (req, res) => {
    const id = req.params.id
    const data = await product.findById(id)
    res.render('pages/editProduct', { data })
}

module.exports = { addCat, create, update, get, remove, getEdit };

