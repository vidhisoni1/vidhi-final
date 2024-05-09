const {Router} = require('express');
const { create } = require('../controller/exta.controller');

const extraCatRoute = Router();

//catRoute.get('/', (req,res)=>{res.send('categories')} );
extraCatRoute.post('/create', create );

module.exports = extraCatRoute;