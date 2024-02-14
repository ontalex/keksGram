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

const getID = () => Date.now() + (Math.random() * 100000).toFixed(0);

export { getRandomPositiveInteger, getRandomArrayElement, getID };
