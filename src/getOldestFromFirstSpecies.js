const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { species } = data;
  const { employees } = data;

  const targetEmployeeObj = employees.find((employee) => employee.id === id);
  const firstSpeciesInChargeId = targetEmployeeObj.responsibleFor[0];
  const firstSpeciesObj = species.find(
    (item) => item.id === firstSpeciesInChargeId,
  );

  const reducer = (previous, current) =>
    (current.age > previous.age ? current : previous);

  const { name, sex, age } = firstSpeciesObj.residents.reduce(reducer);

  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
