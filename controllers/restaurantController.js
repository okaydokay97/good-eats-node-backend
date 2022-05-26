const { query } = require('express')
const { Op } = require('sequelize')
const { Restaurant } = require('../models')

exports.findAll = (req, res) => {
  Restaurant.findAll()
  .then(data => res.send(data))
}

exports.restaurantFilter = (req,res) => {
  let query = req.body.query
  Restaurant.findAll({
    where: {
      cuisine: {
        [Op.contains] : [query]
      }
    }
  })
  .then(data => res.send(data))
  .catch(err => res.send({message: 'nothing found'}))
}