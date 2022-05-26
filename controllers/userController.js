const { User } = require('../models')

exports.findAll = (req,res) => {
  User.findAll()
  .then(data => res.send(data))
}

exports.create = (req,res) => {
  if(!req.body.email) {
    res.status(400).send({
      message: 'Email cannot be emtpy'
    })
    return
  }
  const user = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    admin: false
  }
  User.create(user)
  .then(data => {res.send(data)})
}

exports.findOne = async(req, res) => {
  userInfo = {
    email: req.body.email,
    password: req.body.password
  }
  let user = await User.findOne({where: userInfo})
  if (!user) {
    res.send({
      message: 'Email and/or Password is incorrect.'
    })
    return
  }
  res.send(user)
}