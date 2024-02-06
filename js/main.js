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

//Случайные комментарии к фотографиям
function createMessage() {
  const messages = [];
  for (let i = 0; i < getRandomPositiveInteger(1, 2); i++) {
    messages.push(getRandomArrayElement(comments));
  }
  return messages.join(' ');
}
//console.log(createMessage());

//Создание объекта комментария
function createComment() {
  return {
    id: getRandomPositiveInteger(1, 25),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(names),
  };
}
console.log(createComment());
