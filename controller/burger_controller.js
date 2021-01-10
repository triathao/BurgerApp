const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    res.json({ id: result.insertId })
  })
})

router.put("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  burger.updateOne(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
})

module.exports = router