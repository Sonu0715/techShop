const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProductById,
} = require('../contollers/productContoller')

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

module.exports = router
