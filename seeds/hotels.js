
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hotels').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hotels').insert({id: 1000, name: 'The Stratosphere', lat: "36.146129", lng: "-115.160683", desc: "This thing is gigantic!", isDowntown: false}),
        knex('hotels').insert({id: 2000, name: 'Circus Circus', lat: "36.1374415", lng: "-115.1647961", desc: "Is that Hunter S. Thompson?!", isDowntown: false}),
        knex('hotels').insert({id: 3000, name: 'The Wynn', lat: "36.1264898", lng: "-115.165739", desc: "Where you can Wynn!!", isDowntown: false}),
        knex('hotels').insert({id: 4000, name: 'Trump Tower', lat: "36.1295451", lng: "-115.1728213", desc: "Trump Tower", isDowntown: false}),
        knex('hotels').insert({id: 5000, name: 'The Mirage', lat: "36.1211957", lng: "-115.1740735", desc: "Gotta see the volcano! classic!", isDowntown: false}),
        knex('hotels').insert({id: 6000, name: 'Piazzo', lat: "36.1239675", lng: "-115.167916", desc: "2 for 1 \'you call it\'s\' all night long!", isDowntown: false}),
        knex('hotels').insert({id: 7000, name: 'Venetian', lat: "36.121174", lng: "-115.1696526", desc: "$10 match play on all dope ass bets!!", isDowntown: false}),
        knex('hotels').insert({id: 8000, name: 'Ceasers Palace', lat: "36.116169", lng: "-115.1745003", desc: "Hail Ceaser!", isDowntown: false}),
        knex('hotels').insert({id: 9000, name: 'Flamingo', lat: "36.1162563", lng: "-115.1716874", desc: "super dope flamingos!!", isDowntown: false}),
        knex('hotels').insert({id: 10000, name: 'Bally\'s', lat: "36.114029", lng: "-115.171323", desc: "Tooby tunnel thingy bopper", isDowntown: false}),
        knex('hotels').insert({id: 10001, name: 'Bellagio', lat: "36.1114633", lng: "-115.175486", desc: "Fancy Shit! Good Waffles", isDowntown: false}),
        knex('hotels').insert({id: 10002, name: 'Monte Carlo', lat: "36.104598", lng: "-115.1787748", desc: "Fancy Shit! Good Waffles", isDowntown: false}),
        //downtown starts here
        knex('hotels').insert({id: 10003, name: 'The D', lat: "36.16949", lng: "-115.143077", desc: "This is the best casino in the world!", isDowntown: true}),
        knex('hotels').insert({id: 10004, name: 'freemont', lat: "36.170539", lng: "-115.142809", desc: "This casino is aiiiiite!!", isDowntown: true}),
        knex('hotels').insert({id: 10005, name: 'four queens', lat: "36.1697672", lng: "-115.1437154", desc: "This is the second best casino in the world!", isDowntown: true}),
        knex('hotels').insert({id: 10006, name: 'Golden Nugget', lat: "36.1703267", lng: "-115.1457436", desc: "If you\'re looking for you\'re golden nugget, you might find it here", isDowntown: true}),
        knex('hotels').insert({id: 10007, name: 'California', lat: "36.1729785", lng: "-115.1448324", desc: "Go to the plaza and ask for the Mikey D Special $$$", isDowntown: true}),
        knex('hotels').insert({id: 10008, name: 'Downtown Grand', lat: "36.1720691", lng: "-115.1411417", desc: "2 for 1 \'you call it\'s\' all night long!", isDowntown: true}),
        knex('hotels').insert({id: 10009, name: 'Gold Spike', lat: "36.1711121", lng: "-115.140793", desc: "Spike your Gold!", isDowntown: true}),
        knex('hotels').insert({id: 20000, name: 'El Cortez', lat: "36.1688819", lng: "-115.1391032", desc: "This is the downtown ain\'t it grand! $5 poker hands", isDowntown: true}),
        knex('hotels').insert({id: 20001, name: 'The Plaza', lat: "36.1713467", lng: "-115.1470735", desc: "$10 match play on all dope ass bets!!", isDowntown: true}),
        knex('hotels').insert({id: 20002, name: 'Golden Gate', lat: "36.1711016", lng: "-115.1462776", desc: "Go to the back nock 3 times and kick the door. password is \"boobs\". you\'re welcome", isDowntown: true})

      ]);
    });
};
