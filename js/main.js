const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const descriptions = [
  'Отдыхаем всем селом.',
  'А как вы проводите свободное время',
  'Релаксирую',
  'Обожаю эту еду',
  'Водичка шик',
  'На чилле',
  'Новая фотка на оценку',
  'Топовый концерт',
  'Обожаю своего котика',
  'На тусе',
  'Фоточка для инсты',
];

const names = ['Максим', 'Алексей', 'Сева', 'Аня', 'Настя', 'Степан'];

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

const getID = () => Number(String(performance.now()).replace('.', '')) + Date.now();

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
    likes: getRandomPositiveInteger(15, 100),
    comments: Array.from({length: getRandomPositiveInteger(1, 25)}, createComment)
  };
}

// console.log( createPhoto(1) );

// Создание набора фотографий
function createPhotos(count) {

  return Array.from({length: count}, createPhoto).map((value, index) => createPhoto(index + 1));

}

// console.log(JSON.stringify(createPhotos(2), 2));
