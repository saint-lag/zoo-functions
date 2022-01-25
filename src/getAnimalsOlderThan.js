const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((species) => animal === species.name)
    .residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
