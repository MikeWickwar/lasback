exports.up = function(knex, Promise) {
  return knex.schema.createTable('hotels', function (table) {
    table.increments();
    table.string('name');
    table.string('lat');
    table.string('lng');
    table.string('weight');
    table.integer('stars');
    table.string('desc');
    table.boolean('isDowntown');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hotels');
};
