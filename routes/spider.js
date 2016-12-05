var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

//get spider htels listening
router.get('/hotel_names', function(req, res, next) {

  var pageToVisit = "https://www.vegas.com/resorts/";
  console.log("Visiting page " + pageToVisit);
  request(pageToVisit, function(error, response, body) {
     if(error) {
       console.log("Error: " + error);
     }
     // Check status code (200 is HTTP OK)
     console.log("Status code: " + response.statusCode);
     if(response.statusCode === 200) {
       // Parse the document body
       var $ = cheerio.load(body);
       res.json({'hotels': {hotels: $('li.offer-item').text()}});

       console.log("hotels?:  " + $('li.offer-item').text());
     }
  });

});



module.exports = router;
