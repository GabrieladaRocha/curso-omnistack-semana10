const { Router } = require('express');
const devController = require('./controllers/devController')
const SearchController = require('./controllers/SearchController')

const routes = Router();


routes.get('/devs', devController.index)
routes.post('/devs', devController.store)

routes.get('/search', SearchController.index)

module.exports = routes;