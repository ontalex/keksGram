import {names, comments, descriptions} from './data.js';

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const res = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(res);
};

//Получение случайного элемента массива
function getRandomArrayElement(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}
