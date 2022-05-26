module.exports = (app) => {
  const orders = require('../controllers/orderController')
  const restaurants =require('../controllers/restaurantController')
  const users = require('../controllers/userController')
  const router = require('express').Router()

  router.get('/restaurants', restaurants.findAll)
  router.post('/restaurantSearch', restaurants.restaurantFilter)


  router.get('/orders', orders.findAll)
  router.post('/orders', orders.create )

  router.get('/users', users.findAll)
  router.post('/users', users.create)
  router.post('/user', users.findOne)


  app.use(router)

}