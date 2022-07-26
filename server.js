const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const dishesRoutes = require('./routes/dishes.js')
const countriesRoutes = require('./routes/countries.js')

/*
 * create the server
 *************************/

const server = express()
module.exports = server

/*
 * configure the server
 *************************/

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

/*
 * define the routes
 *************************/

server.get('/', (req, res) => {
  res.redirect('/dishes')
})

server.use('/dishes', dishesRoutes)
server.use('/countries', countriesRoutes)
