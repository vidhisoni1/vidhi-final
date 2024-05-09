const {Router} = require('express');
const { create, get, deleteAll, update } = require('../controller/category.controller');

const catRoute = Router();

catRoute.get('/', get );
catRoute.delete('/',deleteAll );
catRoute.patch('/update/:id', update)

catRoute.post('/create', create );

module.exports = catRoute;