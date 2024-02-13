import { names, descriptions, comments } from './data.js';
import  {getRandomPositiveInteger, getRandomArrayElement, getID} from "./utils.js";

//Случайные комментарии к фотографиям
function createMessage() {
  const messages = [];
  for (let i = 0; i < getRandomPositiveInteger(1, 2); i++) {
    messages.push(getRandomArrayElement(comments));
  }
  return messages.join(' ');
}

//Создание объекта комментария
function createComment() {
  return {
    id: getID(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(names),
  };
}

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

// Создание набора фотографий
function createPhotos(count) {

  return Array.from({length: count}, (_, index) => createPhoto(index + 1));

}

export {createPhotos};
