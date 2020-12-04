
exports.up = function (knex) {
  return knex.schema.createTable('users_plants', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('plant_id')
    table.string('name')
    table.string('notes')
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users_plants')
}

