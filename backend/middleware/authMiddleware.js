const jwt = require('jsonwebtoken')
// const User = require('../models/userModel')

const protect = async (req, res, next) => {
  // console.log(res.headers.authorization)
  next()
}

module.exports = { protect }
