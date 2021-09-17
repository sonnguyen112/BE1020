require("dotenv").config()
import knex from "knex"

const connection = knex({
    client:"sqlite3",
    connection:":memory:",
    useNullAsDefault: true
})

async function createTable() {
    await connection.schema.createTable('examinee', function (table) {
        table.increments();
        table.string('username').notNullable();
        table.string('displayed_name').notNullable();
        table.string('password').notNullable();
    })
}

createTable()

export {
    connection
}