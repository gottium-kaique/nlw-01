import Knex from 'knex'

export async function up({schema}: Knex) {
  return schema.createTable('point_items', table => {
    table.increments()

    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points')

    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items')
  })
}

export async function down({schema}: Knex) {
  return schema.dropTable('point_items')
}