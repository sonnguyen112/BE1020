require("dotenv").config()
import knex from "knex"

const connection = knex({
    client:"mysql2",
    connection:{
        host: process.env.DB_HOST,
        user:process.env.DB_USER,
        database:process.env.DB_NAME,
        password:process.env.DB_PASSWORD
    }
})

export {
    connection
}