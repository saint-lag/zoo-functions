// /* eslint-disable sonarjs/cognitive-complexity */
// /* eslint-disable complexity */
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

// Cases:
function cases(options) {
  // Include Names: true
  // Sex: male/female && Include Names: true
  // Sorted: true && Include Names: true
  const result = [];
  if (options.includeNames) {
    result.push('includeNames'); if (options.sex) {
      result.push('sex');
    } if (options.sorted) {
      result.push('sorted');
    }
  }
  console.log(result);
  return result;
}

function getAnimalMap(options) {
  // Default Animal Map is the Base Map:
  let animalMap = baseMap;
  if (options === undefined) {
    return animalMap;
  }
  const resultCases = cases(options);
  if (resultCases.includes('includeNames') === true) {
    animalMap = getNamesIncluded(animalMap);
  }
  if (resultCases.includes('sex') === true) {
    animalMap = getNamesByBiologicalSex(animalMap, options.sex);
  }
  if (resultCases.includes('sorted') === true) {
    animalMap = getNamesSorted(animalMap);
  }
  return animalMap;
}

module.exports = getAnimalMap;
