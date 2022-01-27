const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50)
      .length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  return (
    Object.values(countEntrants(entrants))[0] * 20.99
    + Object.values(countEntrants(entrants))[1] * 49.99
    + Object.values(countEntrants(entrants))[2] * 24.99
  );
}

module.exports = { calculateEntry, countEntrants };
