const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  // Note: 'Species' is both the plural form as the singular form in English
  const { species } = data;
  if (animal === undefined) {
    const result = {};
    species.forEach((item) => { result[item.name] = item.residents.length; });
    return result;
  } if (typeof animal === 'object') {
    const foundSpecies = species.find((item) => item.name === animal.specie);
    return Object.keys(animal)[1] === 'sex'
      ? foundSpecies.residents.filter(
        (item) => item.sex === Object.values(animal)[1],
      ).length
      : foundSpecies.residents.length;
  }
  throw new Error('Unknown Error...');
}

module.exports = countAnimals;
