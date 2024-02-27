import { renderPictures } from './renderPictures.js';

const onLoadSuccess = (data) => {
  renderPictures(data);
};

const onLoadError = () => {
  // показать сообщение с ошибкой
  const template = document.getElementById('errorOnLoad');
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);
};

export { onLoadError, onLoadSuccess };
