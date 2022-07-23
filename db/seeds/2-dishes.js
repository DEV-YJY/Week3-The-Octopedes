exports.seed = function (knex) {
  return knex('dishes').insert([
    {
      id: 1,
      country_id: 1,
      name: 'Feijoada',
      description:
        'Feijoada is a hearty bean stew that is served as a large feast with farofa (roasted cassava flour), green leafy vegetables, rice and orange slices.',
      vegan: 'yes',
      image: 'url',
    },
    {
      id: 2,
      country_id: 1,
      name: 'Barbecued Churrasco',
      description:
        'Churrasco is skewered barbecue art used in Brazil for centuries. The meat is traditionally placed on skewers and grilled on open flame charcoal rotisserie for perfect succulence.',
      vegan: 'no',
      image: 'url',
    },
    {
      id: 3,
      country_id: 2,
      name: 'Bulgogi',
      description: 'Marinated beef',
      vegan: 'no',
      image: 'url',
    },
    {
      id: 4,
      country_id: 2,
      name: 'Hotteok',
      description: 'Sweet Korean pancake with fillings',
      vegan: 'yes',
      image: 'url',
    },
    {
      id: 5,
      country_id: 3,
      name: 'Kare kare',
      description: 'Savoury stew with meat, bok choy, and peanut sauce.',
      vegan: 'no',
      image: 'url',
    },
    {
      id: 6,
      country_id: 3,
      name: 'Lumpiang sariwa',
      description:
        'Fresh vegetable roll wrapped in a soft wrapper and drizzled with sweet peanut sauce.',
      vegan: 'yes',
      image: 'url',
    },
    {
      id: 7,
      country_id: 4,
      name: 'Swiss Roesti',
      description:
        'Swiss National dish made with coarsely grated potatoes that have been fried in a pan.',
      vegan: 'yes',
      image: 'url',
    },
    {
      id: 8,
      country_id: 4,
      name: 'Swiss Raclette',
      description:
        'Melted cheese over potatoes. Very popular during winter after skiing.',
      vegan: 'no',
      image: 'url',
    },
  ])
}
