exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('partyId');
    table.string('email');
    table.integer('location');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
