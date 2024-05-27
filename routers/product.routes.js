const { Router } = require('express');
const { create, get, update, addCat, remove, getEdit } = require('../controller/product.controller');
const authenticate = require('../middleware/auth');

const productRoute = Router();

productRoute.use(authenticate)

productRoute.get('/', get);

productRoute.get('/edit/:id', getEdit)
productRoute.post('/edit/:id', update)

productRoute.get('/delete/:id', remove);

productRoute.get('/create', addCat);
productRoute.post('/create', create);

module.exports = productRoute;