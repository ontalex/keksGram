const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');

let comments = [];

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;

const makeComment = (template, data) => {
  const commentTemplate = template.cloneNode(true);

  commentTemplate.querySelector('.social__picture').src = data.avatar;
  commentTemplate.querySelector('.social__picture').alt = data.name;
  commentTemplate.querySelector('.social__text').textContent = data.message;

  return commentTemplate;
};

const renderComments = (data) => {
  const targetRender = bigPicture.querySelector('.social__comments');
  const commentTemplate = bigPicture.querySelector('.social__comment');

  // bigPicture.querySelector(".")

  commentsShown += COMMENTS_PER_PORTION;
  
  console.log("Comments: ", data);
  console.log("Comments Count: ", data.length);

  console.log("Rendered Coments: ", comments);
  console.log("Rendered Count: ", commentsShown);

  if (commentsShown >= data.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = data.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  // сброс списка комментариев
  targetRender.innerHTML = '';

  // рендер списка комментариев
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = makeComment(commentTemplate, data[i]);
    console.log(commentElement);
    targetRender.append(commentElement);
  }
};

const renderPictureDetails = (data) => {

  comments = data.comments;

  // смена фото
  const picture = bigPicture.querySelector('.big-picture__img img');
  picture.src = data.url;
  picture.alt = data.description;

  // изменить информацию в окне (общая информация)
  bigPicture.querySelector('.social__caption').textContent = data.description;
  bigPicture.querySelector('.likes-count').textContent = data.likes;

  // изменить комментарии
  renderComments(comments);

};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  window.removeEventListener('keydown', hideBigPicture);
  document.querySelector('.big-picture__cancel').addEventListener('click', hideBigPicture);

  comments = [];
  commentsShown = 0;
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const showBigPicture = (data) => {

  renderPictureDetails(data);

  window.addEventListener('keydown', onEscKeyDown);
  document.querySelector('.big-picture__cancel').addEventListener('click', hideBigPicture);

  // bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  // bigPicture.querySelector('.comments-loader').classList.add('hidden');

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

commentsLoader.addEventListener('click', () => {
  renderComments(comments);
});

export { showBigPicture };
