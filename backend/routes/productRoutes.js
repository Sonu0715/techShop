const express = require('express')
const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')
const {
  getProducts,
  getProductById,
} = require('../contollers/productContoller')

const router = express.Router()

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

module.exports = router
