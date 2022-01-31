const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0 || ids === undefined) {
    return [];
  }
  if (ids.length >= 1) {
    return ids.map((id) => species.find((obj) => obj.id === id));
  }
}

module.exports = getSpeciesByIds;
