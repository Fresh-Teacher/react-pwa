import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const title = "Fresh Teacher's Library 📚";

const email = 'freshteacheruganda256@gmail.com';

const repository = 'https://github.com/suren-atoyan/react-pwa';

const messages = {
  app: {
    crash: {
      title: 'Oooops...something went wrong! You can:',
      options: {
        email: `contact with author using this email - ${email}`,
        reset: 'Or click here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, there is something wrong with the loading process... Maybe trying later would be the best idea 😢',
  },
  images: {
    failed: 'something went wrong during image loading 🥺 ',
  },
  404: 'Sap bro? What are you looking for? 🤔',
};

const dateFormat = 'MMMM DD, YYYY';

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Starter kit for modern web applications',
};
const giphy404 = 'https://giphy.com/embed/xTiN0L7EW5trfOvEk0';

export {
  loader,
  notifications,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,
};
