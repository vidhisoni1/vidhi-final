const { Router } = require('express');
const { create, get, deleteAll, update, addCat } = require('../controller/category.controller');
const authenticate = require('../middleware/auth');

const catRoute = Router();

catRoute.use(authenticate)

catRoute.get('/', get);
catRoute.delete('/', deleteAll);
catRoute.patch('/update/:id', update)

catRoute.get('/create', addCat);
catRoute.post('/create', create);

module.exports = catRoute;