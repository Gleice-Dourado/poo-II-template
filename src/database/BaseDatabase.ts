import { knex } from "knex"
import { UserDatabase } from "./UserDatabase"

export abstract class BaseDatabase {

    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/poo-ii.db",
        },
        useNullAsDefault: true,
        pool: {
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })
}

// new UserDatabase().db("")
export const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./src/database/poo.db",
    },
    useNullAsDefault: true,
    pool: { 
        min: 0,
        max: 1,
        afterCreate: (conn: any, cb: any) => {
            conn.run("PRAGMA foreign_keys = ON", cb)
        }
    }
})