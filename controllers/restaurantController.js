const { Restaurant } = require('../models')

exports.findAll = (req, res) => {
  Restaurant.findAll()
  .then(data => res.send(data))
}