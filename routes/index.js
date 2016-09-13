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
  Hotels().insert(req.body).then(function (response) {
    res.json("success:" + response);
  });
});

router.post('/hotels/:id', function(req, res, next) {
  var id = req.params.id
  Hotels().where('hotels.id', id).update(req.body).then(function(response){
    res.json(response);

  });
});

router.get('/hotels/:id', function(req, res, next) {
  var id = req.params.id
  Hotels().select().where('hotels.id', '=', id).then(function(response){
    res.json(response);

  });
});

router.post('/hotels/:id/delete', function(req, res, next) {
  var id = req.params.id
  Hotels().where('hotels.id', id).del().then(function(response){
    res.json(response);

  });
});

module.exports = router;
