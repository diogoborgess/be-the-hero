
exports.up = function(knex) {
  knex.schema.createTable('incidents', function (table) {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      table.string('ong_id').notNullable();
  });
};

exports.down = function(knex) {
  
};
