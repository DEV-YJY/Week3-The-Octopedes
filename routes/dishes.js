const express = require('express')

const db = require('../db')

const router = express.Router()
module.exports = router

// GET /dishes
router.get('/', (req, res) => {
  // db.getAllDishes()
  //    .then((dishes) => {
  //            res.render('showDishes, {dishes})
  // because handlebars likes objects
  //   })
  db.getAllDishes()
    .then((dishes) => {
      res.render('showDishes', { dishes })
    })
    .catch((err) => {
      console.log(err)
    })
})

// GET /dishes/:id/edit
// router.get('/:id/edit', (req, res) => {
//   const id = Number(req.params.id)

//   // TODO: Get the dish based on its id and replace this viewData
//   // const viewData = {
//   //   id: id,
//   //   name: 'dishname',
//   //   description:
//   //     'dish description.',
//   // }

//   res.render('editDish', viewData)
// })

// POST /dishes/edit
// router.post('/edit', (req, res) => {
//   // ASSISTANCE: So you know what's being posted ;)
//   // const { id, name, description } = req.body

//   // TODO: Update the dish in the database based on its id

//   res.redirect('/dishes')
// })
// dishes/add/:country
router.get('/add/:country', (req, res) => {
  //const country = req.params.country
  db.getAllCountries()
    .then((countries) => {
      console.log(countries)
      res.render('addDish', { countries })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Server error: ')
    })
})

router.post('/add', (req, res) => {
  const { name, description, countryId, vegan } = req.body
  console.log(req.body)
  const newDish = {
    name,
    description,
    country_id: countryId,
    vegan,
  }
  db.addNewDish(newDish)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

// router.post('/add', (req, res) => {
//   const { name, description, time, locationId } = req.body
//   const day = validateDay(req.body.day)

//   db.addNewEvent({ day, name, description, time, location_id: locationId })
//     .then(() => {
//       res.redirect(`/schedule/${day}`)
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500).send('Server error')
//     })
// })
