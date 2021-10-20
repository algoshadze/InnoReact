import React from 'react';
import ReactDom from 'react-dom';
import i18Next from 'i18next';

import {i18NextReactInitConfig} from './i18next';

import App from './app';

i18Next.t = i18Next.t.bind(i18Next);

const i18NextReactInit = i18NextReactInitConfig(i18Next);

// eslint-disable-next-line react/display-name
export default () => <App/>;

export const mount = async (Сomponent) => {
  await Promise.all([i18NextReactInit]);
  ReactDom.render(
      <Сomponent/>,
      document.getElementById('app'),
  );

  if (module.hot) {
    module.hot.accept('./app', async ()=> {
      await i18Next.reloadResources();
      ReactDom.render(
          <App/>,
          document.getElementById('app'),
      );
    });
  }
};

export const unmount = () => {
  ReactDom.unmountComponentAtNode(document.getElementById('app'));
};

