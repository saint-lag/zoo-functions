const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  // seu código aqui
  const idsArr = Array.from(arguments);
  if (arguments === '' || ids === undefined) {
    return [];
  }
  if (idsArr.length >= 1) {
    return idsArr.map((id) => species.find((obj) => obj.id === id));
  }
}

module.exports = getSpeciesByIds;
