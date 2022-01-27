/* eslint-disable sonarjs/cognitive-complexity */
const data = require('../data/zoo_data');

// eslint-disable-next-line complexity
function getEmployeesCoverage(args) {
  const { species } = data;
  const { employees } = data;
  const searchLabelFunction = (obj) =>
    (obj === undefined ? undefined : Object.keys(obj)[0]);
  const searchLabel = searchLabelFunction(args);

  // Common Function:
  const employeeObj = (keySearch, keyInput, inputObj) =>
    employees.find((employee) =>
      (typeof keySearch === 'string'
        ? employee[keySearch] === inputObj[keyInput]
        : employee[keySearch[0]] === inputObj[keyInput]
          || employee[keySearch[1]] === inputObj[keyInput]));
  const result = (objEmployee) => {
    if (objEmployee === undefined) {
      throw new Error('/^Informações inválidas$/');
    }
    const arrAnimals = [];
    const arrLocations = [];
    const animalsIds = objEmployee.responsibleFor;
    species.forEach((animal) => {
      if (animalsIds.find((id) => id === `${animal.id}`) === animal.id) {
        arrAnimals.push(animal.name); arrLocations.push(animal.location);
      }
    });
    return {
      id: objEmployee.id,
      fullName: `${objEmployee.firstName} ${objEmployee.lastName}`,
      species: arrAnimals,
      locations: arrLocations,
    };
  };
  // Search Label: UNDEFINED
  if (searchLabel === undefined) {
    try {
      return employees.map((employee) =>
        result(employeeObj('id', 'id', { id: employee.id })));
    } catch (e) {
      return e;
    }
  } else if (searchLabel === 'name') {
    // Search Label: NAME
    try {
      return result(employeeObj(['firstName', 'lastName'], 'name', args));
    } catch (e) {
      return e;
    }
  } else if (searchLabel === 'id') {
    // Search Label: ID
    try {
      return result(employeeObj('id', 'id', args));
    } catch (e) {
      return e;
    }
  }
}

console.log(getEmployeesCoverage({ id: '-363c-416a-8759-8aa7e50c0992' }));

module.exports = getEmployeesCoverage;
