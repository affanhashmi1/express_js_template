var express = require('express');
var router = express.Router();

/* GET customers page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express - Login' });
});

module.exports = router;
