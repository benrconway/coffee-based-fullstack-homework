var express = require("express");
var router = new express.Router();
var queryHelper = require("../db/query_helper.js")
// setup routes for coffee display and retrieval

router.get("/", function (req, res) {
  queryHelper.all(function (shops) {
    res.json(shops);
  })
})



module.exports = router;
