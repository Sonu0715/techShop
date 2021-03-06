const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')

//@des Auth user & get token
//@route POST/api/users/login
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && user.matchPassword(password)) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email and password')
  }
})

//@des Auth Register  a new user
//@route POST/api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Inavlid user data')
  }
})

//@des Get user profile
//@route GET/api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('success')
})

module.exports = { authUser, registerUser, getUserProfile }
