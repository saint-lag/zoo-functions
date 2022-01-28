const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const managers = [stephanieId, olaId, burlId];
  return managers.find((manager) => manager === id) === id;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const resultArr = employees.map((employee) => {
      if (
        employee.managers.find((manager) => manager === managerId) === managerId
      ) {
        return `${employee.firstName} ${employee.lastName}`;
      }
      return undefined;
    });
    return resultArr.filter((result) => result !== undefined);
  }
}

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
