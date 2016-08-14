var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact');
});

/* POST contact page (submit). */
router.post('/contact', function(req, res) {
  res.render('contact', { name: req.param('name') });
});


module.exports = router;
