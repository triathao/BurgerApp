// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {

    selectAll: function (table, cb) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },

    insertOne: function (table, newBurger, cb) {
        const queryString = `INSERT INTO ${table} SET  burger_name = ?;`;
        connection.query(queryString, [newBurger], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },

    updateOne: function (table, burgerId, cb) {
        const queryString = `UPDATE ${table} SET devoured = TRUE WHERE id = ?`;
        connection.query(queryString, [burgerId], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm