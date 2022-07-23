const express = require('express')

const db = require('../db')

const router = express.Router()
module.exports = router

// http://localhost:3000/countries

// GET /countries/:country
router.get('/:country', (req, res) => {
  const country = req.params.country
  db.getDishesByCountry(country)
    .then((dishes) => {
      res.render('showCountries', { dishes, country: req.params.country })
    })
    .catch((err) => {
      console.error(err)
    })
})
