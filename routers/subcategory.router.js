const {Router} = require('express');
const { create, get, update } = require('../controller/subcategory.controller');

const subcatRoute = Router();

//catRoute.get('/', (req,res)=>{res.send('categories')} );
subcatRoute.get('/', get );
// catRoute.delete('/',deleteAll );
subcatRoute.patch('/update/:id', update)
subcatRoute.post('/create', create );

module.exports = subcatRoute;