import React from 'react';
import {StyledMain, Title, Name} from './main.styled';
import Desc from '../../components/description';
import MetaTags from 'react-meta-tags';
import {useTranslation} from 'react-i18next';


export const Main = () => {
  // eslint-disable-next-line no-unused-vars
  const {t, i18n} = useTranslation();
  return (
    <>
      <MetaTags>
        <title>InnoReact</title>
        <meta
          name='description'
          content='Дз по реакту'
        />
        <meta
          property='og:title'
          content="InnoReact"
        />
      </MetaTags>
      <StyledMain>
        <Title>
          {t('app.welcome')}<Name> React </Name> {t('app.welcome.ending-en')}
        </Title>
        <Desc />
      </StyledMain>

    </>

  );
};
