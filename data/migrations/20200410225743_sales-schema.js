
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.integer('CarID');
        tbl.foreign('CarID').references('cars.id');
        tbl.text('CarVIN', 128);
        tbl.foreign('CarVIN').references('cars.VIN');
        tbl.double('SalesPrice').notNullable();
        tbl.text('SalesDate', 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
