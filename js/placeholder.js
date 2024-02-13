import { names, descriptions, comments } from './data.js';

// Получение случайного положительного целого числа
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

const getID = () => Date.now() + (Math.random() * 100000).toFixed(0);

//Создание объекта комментария
function createComment() {
  return {
    id: getID(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(names),
  };
}

// console.log(createComment(25));

// Создание объекта фотографии
function createPhoto(id) {
  return {
    id: id,
    photo: `photos/${id}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 25)}, createComment)
  };
}

// console.log( createPhoto(1) );

// Создание набора фотографий
function createPhotos(count) {

  return Array.from({length: count}, (_, index) => createPhoto(index + 1));

}

export {createPhotos};
