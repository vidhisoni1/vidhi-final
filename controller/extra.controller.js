const extraCategory = require('../models/extra.model')


const get = async (req, res) => {
    let data = await extraCategory.find();
    res.render('pages/extraCategory', { data })
}
const addExtraCat = async (req, res) => {
    res.render('pages/addExtraCat')
}
const create = async (req, res) => {
    let data = await extraCategory.create(req.body);
    res.redirect('/extracategory')
}
module.exports = { get, addExtraCat, create };