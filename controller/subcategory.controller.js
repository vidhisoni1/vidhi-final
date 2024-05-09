const subcategory =require('../models/subcategory.model')


const create = async(req,res) => {
    console.log(req.body);
    let data = await subcategory.create(req.body);
    res.send(data)
}
const update = async(req,res) => {
    console.log(req.body);
    let data = await subcategory.findByIdAndUpdate(id,req.body,{
        new:true
    });
    res.send(data)
}
const get  = async(req,res) => {
    let data = await subcategory.find().populate('subId');
    res.render('pages/addCat' , {data})
}
// const deleteAll  = async(req,res) => {
//     let data = await subcategory.deleteMany();
//     res.send(data)
// }
module.exports = {create,update,get};