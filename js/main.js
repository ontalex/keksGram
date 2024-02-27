import { getData, sendData } from './api.js';
import { renderPictures } from './renderPictures.js';
import { hideModal, setOnFormSubmit } from './form.js';

const success = document.getElementById('success');
const error = document.getElementById('error');

const onLoadSuccess = (data) => {
  renderPictures(data);
};

const onLoadError = () => {
  // показать сообщение с ошибкой
  const template = document.getElementById('errorOnLoad');
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);
};

getData(onLoadSuccess, onLoadError);


const onSendDataSuccess = () => {
  //закрыть окно формы, показать сообщение c успешной отправкой
  const popupNode = success.content.querySelector('.success').cloneNode(true);

  popupNode
    .querySelector('.success__button')
    .addEventListener('click', () => popupNode.remove());

  document.body.after(popupNode);

  hideModal();
};

const onSendDataError = () => {
  // показать сообщение с ошибкой
  const popupNode = error.content.querySelector('.error').cloneNode(true);

  popupNode
    .querySelector('.error__button')
    .addEventListener('click', () => popupNode.remove());

  document.body.after(popupNode);

  hideModal();
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

