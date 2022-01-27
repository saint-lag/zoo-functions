/* eslint-disable sonarjs/no-identical-functions */
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
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
  // Default Animal Map is the Base Map:
  let animalMap = baseMap;
  if (options === undefined) {
    return animalMap;
  }
  const getNamesIncluded = (mapAnimal) => ({
    NE: mapAnimal.NE.map((item) =>
      species.find((value) => value.name === item)).map((item) => ({
      [`${item.name}`]: item.residents.map((resident) => resident.name),
    })),
    NW: mapAnimal.NW.map((item) =>
      species.find((value) => value.name === item)).map((item) => ({
      [`${item.name}`]: item.residents.map((resident) => resident.name),
    })),
    SE: mapAnimal.SE.map((item) =>
      species.find((value) => value.name === item)).map((item) => ({
      [`${item.name}`]: item.residents.map((resident) => resident.name),
    })),
    SW: mapAnimal.SW.map((item) =>
      species.find((value) => value.name === item)).map((item) => ({
      [`${item.name}`]: item.residents.map((resident) => resident.name),
    })),
  });
  const getNamesSorted = (mapAnimal) => ({
    NE: mapAnimal.NE.map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return { [`${speciesName}`]: Object.values(obj)[0].sort() };
    }),
    NW: mapAnimal.NW.map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return { [`${speciesName}`]: Object.values(obj)[0].sort() };
    }),
    SE: mapAnimal.SE.map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return { [`${speciesName}`]: Object.values(obj)[0].sort() };
    }),
    SW: mapAnimal.SW.map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return { [`${speciesName}`]: Object.values(obj)[0].sort() };
    }),
  });
  const getNamesByBiologicalSex = (mapAnimal, sex) => ({
    NE: mapAnimal.NE.map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return {
        [`${speciesName}`]: Object.values(obj)[0].filter((animal) => {
          const animalName = animal;
          return (
            species
              .find((item) => item.name === speciesName)
              .residents.find((resident) => resident.name === animalName)
              .sex === sex
          );
        }),
      };
    }),
    NW: mapAnimal.NW.map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return {
        [`${speciesName}`]: Object.values(obj)[0].filter((animal) => {
          const animalName = animal;
          return (
            species
              .find((item) => item.name === speciesName)
              .residents.find((resident) => resident.name === animalName)
              .sex === sex
          );
        }),
      };
    }),
    SE: mapAnimal.SE.map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return {
        [`${speciesName}`]: Object.values(obj)[0].filter((animal) => {
          const animalName = animal;
          return (
            species
              .find((item) => item.name === speciesName)
              .residents.find((resident) => resident.name === animalName)
              .sex === sex
          );
        }),
      };
    }),
    SW: mapAnimal.SW.map((obj) => {
      const speciesName = Object.keys(obj)[0];
      return {
        [`${speciesName}`]: Object.values(obj)[0].filter((animal) => {
          const animalName = animal;
          return (
            species
              .find((item) => item.name === speciesName)
              .residents.find((resident) => resident.name === animalName)
              .sex === sex
          );
        }),
      };
    }),
  });
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
    ) !== undefined
    && Object.entries(options).find(
      (item) => item[0] === 'includeNames' && item[1] === true,
    ) !== undefined
  ) {
    animalMap = getNamesSorted(animalMap);
  }

  return animalMap;
}

module.exports = getAnimalMap;
