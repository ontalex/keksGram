import { hideModal } from './form.js';

const success = document.getElementById('success');
const error = document.getElementById('error');

function onEscKeyDown(evt, cb) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
    cb();
  }
}

const onSendDataSuccess = () => {
  //закрыть окно формы, показать сообщение c успешной отправкой
  const popupNode = success.content.querySelector('.success').cloneNode(true);

  document.addEventListener('keydown', (evt) => onEscKeyDown(evt, () => popupNode.remove()));

  popupNode.addEventListener('click', () => popupNode.remove());
  popupNode.querySelector('.success__inner').addEventListener('click', (evt) => evt.stopPropagation());

  popupNode
    .querySelector('.success__button')
    .addEventListener('click', () => popupNode.remove());

  document.body.append(popupNode);

  hideModal();
};

const onSendDataError = () => {
  // показать сообщение с ошибкой
  const popupNode = error.content.querySelector('.error').cloneNode(true);

  document.addEventListener('keydown', (event) => onEscKeyDown(event, () => popupNode.remove()));

  popupNode.addEventListener('click', () => popupNode.remove());
  popupNode.querySelector('.error__inner').addEventListener('click', (evt) => evt.stopPropagation());

  popupNode
    .querySelector('.error__button')
    .addEventListener('click', () => popupNode.remove());

  document.body.append(popupNode);

  hideModal();
};

export { onSendDataSuccess, onSendDataError };
