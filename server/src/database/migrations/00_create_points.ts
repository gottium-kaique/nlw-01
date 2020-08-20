import Knex from "knex"

function up({schema}: Knex) {
  return schema.createTable("points", table => {
    table.increments()
    table.string("image").notNullable()
    table.string("name").notNullable()
    table.string("email").notNullable()
    table.string("whatsapp").notNullable()
    table.decimal("latitude").notNullable()
    table.decimal("longitude").notNullable()
    table.string("city").notNullable()
    table.string("uf", 2).notNullable()
  })
}

function down({schema}: Knex) {
  return schema.dropTable("point")
}

export { up, down }