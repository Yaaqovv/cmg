var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
let aboutUs = require('../controllers/aboutUs');


router.get('/about-us', aboutUs.about_us)

/* GET home page. */
router.get('/', index.index);

module.exports = router;
