var express = require('express'),
    fs = require('fs');

var router = express.Router()

//user
router.get("/", (req, res) => {
    res.render("thundermarch")
})
router.get("/aboutus", (req, res) => {
    res.render("thundermarch_aboutus")
})
router.get("/battleofthebands", (req, res) => {
    res.render("thundermarch_bob")
})

module.exports = router