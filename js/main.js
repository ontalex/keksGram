import { getData, sendData } from './api.js';

import { setOnFormSubmit } from './form.js';
import { onLoadSuccess, onLoadError } from './load.js';

import { onSendDataSuccess, onSendDataError } from './send.js';

getData(onLoadSuccess, onLoadError);

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});
