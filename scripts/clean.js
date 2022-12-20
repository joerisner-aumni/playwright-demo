import { rm } from 'fs';

const removeList = ['./playwright/report/', './playwright/artifacts/', './cypress/screenshots/', './cypress/videos/'];

const removeItem = item => {
  rm(item, { force: true, recursive: true }, error => {
    if (error) console.error(error);
  });
};

removeList.forEach(item => removeItem(item));
