var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Hotels() {
  return knex('hotels');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hotels', function(req, res, next) {
  Hotels().select().then(function(results){
    res.json({'hotels': {hotels: results}});
  });
});

router.post('/hotels', function(req, res, next) {
  Hotels().insert(req.body).then(function () {
    res.json('{success: ithink, data: req.body}}');
  });
});

module.exports = router;
