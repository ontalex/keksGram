import { hideModal } from './form.js';

const success = document.getElementById('success');
const error = document.getElementById('error');

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

export { onSendDataSuccess, onSendDataError };
