exports.seed = (knex) => {
  return knex('countries')
    .del()
    .then(() => knex('dishes').del())
}
