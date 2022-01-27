const data = require('../data/zoo_data');
const getAnimalMap = require('./getAnimalMap');

function getEmployeesCoverage(args) {
  // seu código aqui
  const animalMap = getAnimalMap();
  const { species } = data;
  const { employees } = data;

  const inputObj = args;
  const searchLabelFunction = (obj) =>
    obj === undefined ? undefined : Object.keys(obj)[0];
  const searchLabel = searchLabelFunction(inputObj);

  // Common Function:
  const employeeObj = (keySearch, keyInput, inputObj) =>
    employees.find((employee) =>
      typeof keySearch === 'string'
        ? employee[keySearch] === inputObj[keyInput]
        : employee[keySearch[0]] === inputObj[keyInput] ||
          employee[keySearch[1]] === inputObj[keyInput]
    );
  const result = (employeeObj) => {
    if (employeeObj === undefined) {
      throw new Error('/^Informações inválidas$/');
    }
    let arrAnimals = [];
    let arrLocations = [];
    const animalsIds = employeeObj.responsibleFor;
    species.forEach((animal) => {
      if (animalsIds.find((id) => id === `${animal.id}`) === animal.id) {
        arrAnimals.push(animal.name), arrLocations.push(animal.location);
      }
    });
    return {
      id: employeeObj.id,
      fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
      species: arrAnimals,
      locations: arrLocations,
    };
  };
  // Search Label: UNDEFINED
  if (searchLabel === undefined) {
    try {
      return employees.map((employee) =>
        result(employeeObj('id', 'id', { id: employee.id }))
      );
    } catch (e) {
      return e;
    }
  }
  // Search Label: NAME
  else if (searchLabel === 'name') {
    try {
      return result(employeeObj(['firstName', 'lastName'], 'name', inputObj));
    } catch (e) {
      return e;
    }
  }
  // Search Label: ID
  else if (searchLabel === 'id') {
    try {
      return result(employeeObj('id', 'id', inputObj));
    } catch (e) {
      return e;
    }
  }
}

console.log(getEmployeesCoverage({ id: '-363c-416a-8759-8aa7e50c0992' }));

module.exports = getEmployeesCoverage;
