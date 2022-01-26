const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const { species } = require('../data/zoo_data');

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
  const namesIncluded = (animalMap) => ({
    NE: animalMap['NE']
      .map((item) => species.find((value) => value.name === item))
      .map((item) => ({
        [`${item.name}`]: item.residents.map((resident) => resident.name),
      })),
    NW: animalMap['NW']
      .map((item) => species.find((value) => value.name === item))
      .map((item) => ({
        [`${item.name}`]: item.residents.map((resident) => resident.name),
      })),
    SE: animalMap['SE']
      .map((item) => species.find((value) => value.name === item))
      .map((item) => ({
        [`${item.name}`]: item.residents.map((resident) => resident.name),
      })),
    SW: animalMap['SW']
      .map((item) => species.find((value) => value.name === item))
      .map((item) => ({
        [`${item.name}`]: item.residents.map((resident) => resident.name),
      })),
  });
  const namesSorted = (animalMap) => ({
    NE: animalMap['NE'].sort(),
    NW: animalMap['NW'].sort(),
    SE: animalMap['SE'].sort(),
    SW: animalMap['SW'].sort(),
  });
  // TODO: Names by Biological Sex Function
  const namesByBiologicalSex = (animalMap, sex) => ({
    NE: animalMap['NE']
      .map((item) => species.find((value) => value.name === item))
      .map((item) => item.residents.filter((resident) => resident.sex === sex))
      .name,
    NW: animalMap['NW']
      .map((item) => species.find((value) => value.name === item))
      .map((item) => item.residents.filter((resident) => resident.sex === sex)),
    SE: animalMap['SE']
      .map((item) => species.find((value) => value.name === item))
      .map((item) => item.residents.filter((resident) => resident.sex === sex)),
    SW: animalMap['SW']
      .map((item) => species.find((value) => value.name === item))
      .map((item) => item.residents.filter((resident) => resident.sex === sex)),
  });

  if (
    Object.entries(options).find(
      (item) =>
        item[0] === 'sex' && (item[1] === 'female' || item[1] === 'male')
    ) !== undefined
  ) {
    const sex = options.sex;
    animalMap = namesByBiologicalSex(animalMap, sex);
  }
  if (
    Object.entries(options).find(
      (item) => item[0] === 'sorted' && item[1] === true
    ) !== undefined
  ) {
    animalMap = namesSorted(animalMap);
  }
  if (
    Object.entries(options).find(
      (item) => item[0] === 'includeNames' && item[1] === true
    ) !== undefined
  ) {
    animalMap = namesIncluded(animalMap);
  }
  return animalMap;
}

console.log(getAnimalMap({ sex: 'male' }));

module.exports = getAnimalMap;
