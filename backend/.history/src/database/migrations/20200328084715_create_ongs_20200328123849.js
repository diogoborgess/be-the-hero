
exports.up = function(knex) {
  knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
  });
};

exports.down = function(knex) {
  
};
