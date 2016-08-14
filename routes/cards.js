var express = require('express');
var router = express.Router();


// GET route cards/
router.get('/', function(req, res) {
    res.render('view');
});


// GET route cards/add
router.get('/add', function(req, res) {
    res.render('cards/add');
});

// POST route cards/add
router.get('/add', function(req, res) {
    res.render('add', { name: req.param('name') });
});


module.exports = router;
