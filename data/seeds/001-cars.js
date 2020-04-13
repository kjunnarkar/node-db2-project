
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        //{id: 1, colName: 'rowValue1'},
        {id: 1, VIN: 'H7S39GT3VM2OD69S', Make: 'Toyota', Model: 'Tacoma 4x4', Mileage: 129045.7, TransmissionType: 'Manual 5-speed', TitleStatus: 'Clean' },
        {id: 2, VIN: 'K84DV7K2V0M3SD6J7', Make: 'Honda', Model: 'Accord', Mileage: 84348.6, TransmissionType: 'Automatic', TitleStatus: 'Clean' },
        {id: 3, VIN: 'H7K2S59LNC74S9L6H', Make: 'Ford', Model: 'F-150', Mileage: 339145.4, TransmissionType: 'Manual 4-speed', TitleStatus: 'Salvage' },
        {id: 4, VIN: 'GH953SFHL5349GH72', Make: 'Tesla', Model: '3', Mileage: 77348.2, TransmissionType: 'Automatic Flex Shift', TitleStatus: 'Clean' },
        {id: 5, VIN: '4DH6K92AX95BN4EK8', Make: 'Mercedes Benz', Model: 'GLE 350', Mileage: 184347.9, TransmissionType: 'Automatic', TitleStatus: 'Salvage' },
      ]);
    });
};
