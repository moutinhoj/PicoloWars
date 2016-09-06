var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('account');
});

router.get('/account', function(req, res) {
  res.render('account');
});
module.exports = router;
