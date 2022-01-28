/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
const data = require('../data/zoo_data');

const { species } = data;

const baseMap = {
  NE: species
    .filter((subject) => subject.location === 'NE')
    .map((item) => item.name),
  NW: species
    .filter((subject) => subject.location === 'NW')
    .map((item) => item.name),
  SE: species
    .filter((subject) => subject.location === 'SE')
    .map((item) => item.name),
  SW: species
    .filter((subject) => subject.location === 'SW')
    .map((item) => item.name),
};

function getNamesIncluded(mapAnimal) {
  const result = {};
  Object.keys(mapAnimal).forEach((key) => {
    result[key] = mapAnimal[key]
      .map((item) => species.find((value) => value.name === item))
      .map((item) => ({ [`${item.name}`]: item.residents.map((resident) => resident.name) }));
  });
  return result;
}

function getNamesByBiologicalSex(mapAnimal, sex) {
  const result = {};
  Object.keys(mapAnimal).forEach((key) => {
    result[key] = mapAnimal[key].map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return {
        [`${speciesName}`]: Object.values(obj)[0].filter((animal) => {
          const animalName = animal;
          return (species.find((item) => item.name === speciesName)
            .residents.find((resident) => resident.name === animalName).sex === sex);
        }),
      };
    });
  });
  return result;
}

function getNamesSorted(mapAnimal) {
  const result = {};
  Object.keys(mapAnimal).forEach((key) => {
    result[key] = mapAnimal[key].map((obj) => {
      const speciesName = Object.keys(obj)[0]; return {
        [`${speciesName}`]: Object.values(obj)[0].sort(),
      };
    });
  });
  return result;
}

function getAnimalMap(options) {
  // Default Animal Map is the Base Map:
  let animalMap = baseMap;
  if (options === undefined) {
    return animalMap;
  }
  // Include Names: true
  if (
    Object.entries(options).find(
      (item) => item[0] === 'includeNames' && item[1] === true,
    ) !== undefined
  ) {
    animalMap = getNamesIncluded(animalMap);
  }
  // Sex: male/female && Include Names: true
  if (
    Object.entries(options).find(
      (item) =>
        item[0] === 'sex' && (item[1] === 'female' || item[1] === 'male'),
    ) !== undefined
    && Object.entries(options).find(
      (item) => item[0] === 'includeNames' && item[1] === true,
    ) !== undefined
  ) {
    animalMap = getNamesByBiologicalSex(animalMap, options.sex);
  } // Sorted: true && Include Names: true
  if (
    Object.entries(options).find(
      (item) => item[0] === 'sorted' && item[1] === true,
    ) !== undefined && Object.entries(options).find(
      (item) => item[0] === 'includeNames' && item[1] === true,
    ) !== undefined
  ) {
    animalMap = getNamesSorted(animalMap);
  }
  return animalMap;
}

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;
