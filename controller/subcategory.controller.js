const subcategory = require('../models/subcategory.model')

const addSubCat = async (req, res) => {
    res.render('pages/addSubCat')
}

const create = async (req, res) => {
    let data = await subcategory.create(req.body);
    res.redirect('/subcategory')
}
const update = async (req, res) => {
    console.log(req.body);
    let data = await subcategory.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.send(data)
}
const get = async (req, res) => {
    let data = await subcategory.find().populate('extraId');
    res.render('pages/subCategory', { data })
}
// const deleteAll  = async(req,res) => {
//     let data = await subcategory.deleteMany();
//     res.send(data)
// }
module.exports = { addSubCat, create, update, get };