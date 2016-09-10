
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hotels').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hotels').insert({id: 1, name: 'The Stratosphere', lat: 36.146129, lng: -115.160683, desc: "This thing is gigantic!", isDowntown: false}),
        knex('hotels').insert({id: 2, name: 'Circus Circus', lat: 36.1374415, lng: -115.1647961, desc: "Is that Hunter S. Thompson?!", isDowntown: false}),
        knex('hotels').insert({id: 3, name: 'The Wynn', lat: 36.1264898, lng: -115.165739, desc: "Where you can Wynn!!"}, isDowntown: false),
        knex('hotels').insert({id: 4, name: 'Trump Tower', lat: 36.1295451, lng: -115.1728213, desc: "Trump Tower"}, isDowntown: false),
        knex('hotels').insert({id: 5, name: 'The Mirage', lat: 36.1211957, lng: -115.1740735, desc: "Gotta see the volcano! classic!"}, isDowntown: false),
        knex('hotels').insert({id: 6, name: 'Piazzo', lat: 36.1239675, lng: -115.167916, desc: "2 for 1 \'you call it\'s\' all night long!"}, isDowntown: false),
        knex('hotels').insert({id: 7, name: 'Venetian', lat: 36.121174, lng: -115.1696526, desc: "$10 match play on all dope ass bets!!"}, isDowntown: false),
        knex('hotels').insert({id: 8, name: 'Ceasers Palace', lat: 36.116169, lng: -115.1745003, desc: "Hail Ceaser!"}, isDowntown: false),
        knex('hotels').insert({id: 9, name: 'Flamingo', lat: 36.1162563, lng: -115.1716874, desc: "super dope flamingos!!"}, isDowntown: false),
        knex('hotels').insert({id: 10, name: 'Bally\'s', lat: 36.114029, lng: -115.171323, desc: "Tooby tunnel thingy bopper"}, isDowntown: false),
        knex('hotels').insert({id: 11, name: 'Bellagio', lat: 36.1114633, lng: -115.175486, desc: "Fancy Shit! Good Waffles"}, isDowntown: false),
        knex('hotels').insert({id: 12, name: 'Monte Carlo', lat: 36.104598, lng: -115.1787748, desc: "Fancy Shit! Good Waffles"}, isDowntown: false),
      ]);
    });
};
