exports.up = function(knex, Promise) {
  return knex.schema.createTable('hotels', function (table) {
    table.increments();
    table.string('name');
    table.real('lat');
    table.real('lng');
    table.string('weight');
    table.integer('stars');
    table.string('desc');
    table.string('isDowntown');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hotels');
};
