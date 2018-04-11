const loadDinos = require('./dinosaurs');

let dinoArray = [];

const whendinosLoad = function () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  console.log('dino array', dinoArray);
};
const badDinos = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDinos(whendinosLoad, badDinos);
};
const getDinos = () => {
  return dinoArray;
};

module.exports = {
  initializer,
  getDinos,
};
