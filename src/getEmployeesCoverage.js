// /* eslint-disable complexity */
// /* eslint-disable max-lines-per-function */
// /* eslint-disable sonarjs/cognitive-complexity */
// const data = require('../data/zoo_data');

// const { species } = data;
// const { employees } = data;

// // eslint-disable-next-line complexity
// function searchLabelFunction(obj) {
//   return !obj ? undefined : Object.keys(obj)[0];
// }

// function employeeObj(keySearch, keyInput, inputObj) {
//   employees.find((employee) =>
//     (typeof keySearch === 'string'
//       ? employee[keySearch] === inputObj[keyInput]
//       : employee[keySearch[0]] === inputObj[keyInput]
//         || employee[keySearch[1]] === inputObj[keyInput]));
// }

// function resultObj(objEmployee) {
//   {
//     if (objEmployee === undefined) {
//       throw new Error('/^Informações inválidas$/');
//     }
//     const arrAnimals = [];
//     const arrLocations = [];
//     const animalsIds = objEmployee.responsibleFor;
//     species.forEach((animal) => {
//       if (animalsIds.find((id) => id === `${animal.id}`) === animal.id) {
//         arrAnimals.push(animal.name); arrLocations.push(animal.location);
//       }
//     });
//     return {
//       id: objEmployee.id,
//       fullName: `${objEmployee.firstName} ${objEmployee.lastName}`,
//       species: arrAnimals,
//       locations: arrLocations,
//     };
//   }
// }

// function getEmployeesCoverage(args) {
//   const searchLabel = searchLabelFunction(args);
//   // Search Label: UNDEFINED
//   if (searchLabel === undefined) {
//     try {
//       return employees.map((employee) =>
//         resultObj(employeeObj('id', 'id', { id: employee.id })));
//     } catch (e) {
//       return e;
//     }
//   } else if (searchLabel === 'name') {
//     // Search Label: NAME
//     try {
//       return resultObj(employeeObj(['firstName', 'lastName'], 'name', args));
//     } catch (e) {
//       return e;
//     }
//   } else if (searchLabel === 'id') {
//     // Search Label: ID
//     try {
//       return resultObj(employeeObj('id', 'id', args));
//     } catch (e) {
//       return e;
//     }
//   }
// }

// console.log(
//   getEmployeesCoverage(),
// );

// module.exports = getEmployeesCoverage;
