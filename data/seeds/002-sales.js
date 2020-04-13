
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        { id: 1, CarID: 1, CarVIN: '1', SalesPrice: 14267, SalesDate: '04/05/2020' },
        { id: 2, CarID: 2, CarVIN: '2', SalesPrice: 22579, SalesDate: '04/07/2020' },
        { id: 3, CarID: 3, CarVIN: '3', SalesPrice: 34314, SalesDate: '04/08/2020' },
        { id: 4, CarID: 4, CarVIN: '4', SalesPrice: 18896, SalesDate: '04/10/2020' },
        { id: 5, CarID: 5, CarVIN: '5', SalesPrice: 58896, SalesDate: '04/11/2020' }
      ]);
    });
};
