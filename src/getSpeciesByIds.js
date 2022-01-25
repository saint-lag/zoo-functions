const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  // seu código aqui
  idsArr = Array.from(arguments);
  if (arguments === '' || ids === undefined) {
    return [];
  } else if (idsArr.length >= 1) {
    return idsArr.map((id) => species.find((species) => species.id === id));
  }
}

module.exports = getSpeciesByIds;
