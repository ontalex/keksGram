const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      'https://28.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        body,
      },
    );

    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export { sendData };
