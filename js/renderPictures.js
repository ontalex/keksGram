import { showBigPicture } from './fullscreenPicture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


//Создание элемента фотографии
const createPictureElement = (picture, index) => {
  const { url, likes, comments } = picture;
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureElement.dataset.index = index;

  return pictureElement;
};

//Отображение фотографий
const renderPictures = (pictures) => {
  container.addEventListener('click', (e) => {

    if(e.target.closest('.picture')) {
      showBigPicture(pictures[e.target.closest('.picture').dataset.index]);
    }
  });

  const fragment = document.createDocumentFragment();

  pictures.forEach((picture, index) => {
    fragment.append(createPictureElement(picture,index));
  });

  container.append(fragment);
};

export { renderPictures };
