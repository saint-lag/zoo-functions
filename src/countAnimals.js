const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  // Note: 'Species' is both the plural form as the singular form in English
  const { species } = require('../data/zoo_data');
  if (animal === undefined) {
    result = {};
    species.forEach((item) => (result[item.name] = item.residents.length));
    return result;
  } else if (typeof animal === 'object') {
    foundSpecies = species.find((item) => item.name === animal.specie);
    return Object.keys(animal)[1] === 'sex'
      ? foundSpecies.residents.filter(
          (item) => item.sex === Object.values(animal)[1]
        ).length
      : foundSpecies.residents.length;
  } else {
    throw new Error('Unknown Error...');
  }
}

module.exports = countAnimals;
