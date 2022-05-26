
const { Order } = require('../models')

exports.findAll = (req, res) => {
  Order.findAll()
  .then(data => {
    res.send(data)
  })
}

exports.create = (req, res) => {
  const order = {
    description: req.body.description,
    price: req.body.price,
    UserId: req.body.userId,
    RestaurantId: req.body.restaurantId
  }
  Order.create(order)
  .catch(err => res.send(err))
  .then(data => res.send(data))
}