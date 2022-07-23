exports.seed = function (knex) {
  return knex('countries').insert([
    {
      id: 1,
      name: 'Brazil',
    },
    {
      id: 2,
      name: 'Korea',
    },
    {
      id: 3,
      name: 'Philippines',
    },
    {
      id: 4,
      name: 'Switzerland',
    },
  ])
}
