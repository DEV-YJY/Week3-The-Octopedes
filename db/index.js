const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllDishes,
  getDishesByCountry,
  addNewDish,
  getAllCountries,
}
// mission is get all dishes from the database
function getAllDishes(db = connection) {
  return db('dishes').select()
}

//get all countries
function getAllCountries(db = connection) {
  return db('countries').select('countries.name')
}

// GET/countries/:countryparam
function getDishesByCountry(country, db = connection) {
  return (
    db('dishes')
      .join('countries', 'dishes.country_id', 'countries.id')
      .select(
        'dishes.*',
        'dishes.name as dishName',
        'countries.name as countryName'
      )
      // country needs to match country name in our db
      .where('countries.name', 'LIKE', '%' + country + '%')
  )
}

// TODO: write some more database functions
function addNewDish(dish, db = connection) {
  return db('dishes').insert(dish)
}
