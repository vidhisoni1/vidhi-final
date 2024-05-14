const { Router } = require('express');
const { get, create, addExtraCat } = require('../controller/extra.controller');

const extraCatRoute = Router();

extraCatRoute.get('/', get);
extraCatRoute.get('/create', addExtraCat);
extraCatRoute.post('/create', create);

module.exports = extraCatRoute;