var express = require('express');
var router = express.Router();

/* GET about us page. */

router.get('/about-us', function(req, res, next) {
  res.render('index', { title: 'About us' });
});

module.exports = router;
