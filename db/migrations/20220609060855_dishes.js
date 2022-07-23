exports.up = function (knex) {
  return knex.schema.createTable('dishes', (table) => {
    table.increments('id')
    table.integer('country_id')
    table.string('name')
    table.string('description')
    table.boolean('vegan')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.createTable('dishes')
}
