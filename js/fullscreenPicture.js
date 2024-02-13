const bigPicture = document.querySelector('.big-picture');

const makeComment = (template, data) => {
    const commentTemplate = template.cloneNode(true);

    commentTemplate.querySelector('.social__picture').src = data.avatar;
    commentTemplate.querySelector('.social__text').textContent = data.message;

    return commentTemplate;
};

const renderComments = (data) => {
    const targetRender = bigPicture.querySelector('.social__comments');
    const commentTemplate = bigPicture.querySelector('.social__comment');

    // сброс списка комментариев
    targetRender.innerHTML = '';

    // рендер списка комментариев
    data.forEach((comment) => {
        targetRender.appendChild(makeComment(commentTemplate, comment));
    });
};

const renderPictureDetails = (data) => {

    // смена фото
    const picture = bigPicture.querySelector('.big-picture__img img');
    picture.src = data.url;
    picture.alt = data.description;

    // изменить информацию в окне (общая информация)
    bigPicture.querySelector('.social__caption').textContent = data.description;
    bigPicture.querySelector('.likes-count').textContent = data.likes;

    // изменить комментарии
    renderComments(data.comments);

};

const hideBigPicture = () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');

    window.removeEventListener('keydown', hideBigPicture);
    document.querySelector('.big-picture__cancel').addEventListener('click', hideBigPicture);
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

    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');

};

export { showBigPicture };
