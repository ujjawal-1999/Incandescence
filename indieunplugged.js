var express = require('express'),
    fs = require('fs');
var router = express.Router()


router.get("/", (req, res) => {
    res.render("indieunplugged")
})

module.exports = router