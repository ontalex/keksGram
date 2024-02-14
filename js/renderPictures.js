import { showBigPicture } from './fullscreenPicture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

//Создание элемента фотографии
const createPictureElement = (picture) => {
  const { url, likes, comments } = picture;
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureElement.addEventListener('click', () => {
    showBigPicture(picture);
  });

  return pictureElement;
};

//Отображение фотографий
const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = createPictureElement(picture);
    fragment.append(pictureElement);
  });

  container.append(fragment);
};

export { renderPictures };
