const { Router } = require('express');
const { get, create, addExtraCat } = require('../controller/extra.controller');
const authenticate = require('../middleware/auth');

const extraCatRoute = Router();

extraCatRoute.use(authenticate)

extraCatRoute.get('/', get);
extraCatRoute.get('/create', addExtraCat);
extraCatRoute.post('/create', create);

module.exports = extraCatRoute;