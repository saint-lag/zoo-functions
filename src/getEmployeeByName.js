const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employeeName !== undefined
    ? employees.find(
      (employee) =>
        employeeName === employee.firstName
          || employeeName === employee.lastName,
    )
    : {};
}

module.exports = getEmployeeByName;
