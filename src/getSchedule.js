const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // Imported DATA:
  const { hours } = data;
  const { species } = data;

  // Local Constants:
  const animalsNames = species.map((item) => item.name);
  const weekdays = Object.keys(hours);
  const officeHour = (day) =>
    `Open from ${hours[`${day}`].open}am until ${hours[`${day}`].close}pm`;
  const exhibition = (day) => {
    let scheduleSpecies = species
      .filter(
        (animal) =>
          animal.availability.find((item) => item === `${day}`) !== undefined
      )
      .map((animal) => animal.name);
    return scheduleSpecies;
  };

  // Local Variables:
  let schedule = undefined;

  // Conditionals:
  // Target is UNDEFINED or a different string than any of available ANIMALS names or WEEKDAYS
  if (
    scheduleTarget === undefined ||
    (weekdays.find((weekday) => weekday === scheduleTarget) !==
      scheduleTarget &&
      animalsNames.find((animal) => animal === scheduleTarget) !==
        scheduleTarget)
  ) {
    schedule = weekdays.map((weekday) => {
      const officeHourResult = officeHour(`${weekday}`);
      const exhibitionResult = exhibition(`${weekday}`);

      return {
        [`${weekday}`]: {
          officeHour:
            officeHourResult !== 'Open from 0am until 0pm'
              ? officeHourResult
              : 'CLOSED',
          exhibition:
            exhibitionResult.length !== 0
              ? exhibitionResult
              : 'The zoo will be closed!',
        },
      };
    });
    return Object.assign({}, ...schedule);
  } else if (
    weekdays.find((weekday) => weekday === scheduleTarget) === scheduleTarget
  ) {
    const officeHourResult = officeHour(scheduleTarget);
    const exhibitionResult = exhibition(scheduleTarget);
    return {
      [`${scheduleTarget}`]: {
        officeHour:
          officeHourResult !== 'Open from 0am until 0pm'
            ? officeHourResult
            : 'CLOSED',
        exhibition:
          exhibitionResult.length !== 0
            ? exhibitionResult
            : 'The zoo will be closed!',
      },
    };
  } else if (
    animalsNames.find((animal) => animal === scheduleTarget) === scheduleTarget
  ) {
    return species.find((obj) => obj.name === scheduleTarget).availability;
  }
}
console.log(getSchedule('Monday'));

module.exports = getSchedule;
