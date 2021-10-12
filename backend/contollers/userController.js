const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')

//@des Auth user & get token
//@route POST/api/user/login
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

module.exports = { authUser }
