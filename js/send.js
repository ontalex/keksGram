import { hideModal, setOnFormSubmit } from './form.js';
import { sendData } from './api.js';

let success = document.getElementById('success');
let error = document.getElementById('error');

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
