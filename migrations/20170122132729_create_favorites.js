exports.up = function(knex, Promise) {
  return knex.schema.createTable('favlkup', function (table) {
    table.increments();
    table.string('user_fk');
    table.string('place_id');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favoritesLookup');
};
