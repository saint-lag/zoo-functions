// /* eslint-disable sonarjs/cognitive-complexity */
// // /* eslint-disable complexity */
// // /* eslint-disable max-lines-per-function */
// const data = require('../data/zoo_data');

// const { hours } = data;
// const { species } = data;
// const weekdays = Object.keys(hours);
// const animalsNames = species.map((item) => item.name);

// const officeHour = (day) =>
//   `Open from ${hours[`${day}`].open}am until ${hours[`${day}`].close}pm`;
// const exhibition = (day) => {
//   const scheduleSpecies = species
//     .filter(
//       (animal) =>
//         animal.availability.find((item) => item === `${day}`) !== undefined,
//     )
//     .map((animal) => animal.name);
//   return scheduleSpecies;
// };

// function getSchedule(scheduleTarget) {
//   // Local Variables:
//   let schedule;

//   if (
//     weekdays.includes(scheduleTarget)
//   ) {
//     const officeHourResult = officeHour(scheduleTarget);
//     const exhibitionResult = exhibition(scheduleTarget);
//     return {
//       [`${scheduleTarget}`]: {
//         officeHour:
//           officeHourResult !== 'Open from 0am until 0pm'
//             ? officeHourResult
//             : 'CLOSED',
//         exhibition:
//           exhibitionResult.length !== 0
//             ? exhibitionResult
//             : 'The zoo will be closed!',
//       },
//     };
//   } if (
//     animalsNames.includes(scheduleTarget)
//   ) {
//     return species.find((obj) => obj.name === scheduleTarget).availability;
//   } if (scheduleTarget === undefined) {
//     schedule = weekdays.map((weekday) => {
//       const officeHourResult = officeHour(`${weekday}`);
//       const exhibitionResult = exhibition(`${weekday}`);

//       return {
//         [`${weekday}`]: {
//           officeHour:
//                 officeHourResult !== 'Open from 0am until 0pm'
//                   ? officeHourResult
//                   : 'CLOSED',
//           exhibition:
//                 exhibitionResult.length !== 0
//                   ? exhibitionResult
//                   : 'The zoo will be closed!',
//         },
//       };
//     });
//     return Object.assign({}, ...schedule);
//   }
// }
// console.log(getSchedule('Monday'));

// module.exports = getSchedule;
