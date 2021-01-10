

const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: function (newBurger, cb) {
        orm.insertOne("burgers", newBurger, (res) => {
            cb(res);
        });
    },

    updateOne: function (burgerId, cb) {
        orm.updateOne("burgers", burgerId, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;