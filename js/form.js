const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const maxHashtag = 5;
const minHashtagLength = 2;
const maxHashtagLength = 20;
const wrongSymbols = /[^a-zA-Z0-9а-яА-ЯёЁ]/g;


// eslint-disable-next-line no-undef
const pristine = new Pristine(form, {
  classTo: 'img-upload__element',
  errorTextParent: 'img-upload__element',
  errorTextClass: 'img-upload__error',
});

const showModal = ()=> {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const hideModal = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const onFocus = () => document.activeElement === hashtagField || document.activeElement === descriptionField;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !onFocus()) {
    evt.preventDefault();
    hideModal();
  }
}

const startWithHashtag = (string) =>
  string.startsWith('#');

const validLength = (string) =>
  string.length >= minHashtagLength && string.length <= maxHashtagLength;

const validSymbols = (string) =>
  !wrongSymbols.test(string.slice(1));

const validTag = (tag) =>
  startWithHashtag(tag) &&
validLength(tag) &&
validSymbols(tag);

const validCount = (tags) => tags.length <= maxHashtag;

const uniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag)=> tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return validCount(tags) &&
  uniqueTags(tags) &&
  tags.every(validTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);

fileField.addEventListener('change', () => {
  showModal();
});

cancelButton.addEventListener('click', () => {
  hideModal();
});

form.addEventListener('submit', () => {
  pristine.validate();
});
