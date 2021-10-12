const express = require('express')
const router = express.Router()
const { authUser } = require('../contollers/userController')

router.post('/login', authUser)

module.exports = router
