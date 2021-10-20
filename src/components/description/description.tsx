import React from 'react';
import {StyledDesc} from './description-styled';
import {useTranslation} from 'react-i18next';
import Button from 'src/components/button';

export const Desc = () => {
  // eslint-disable-next-line no-unused-vars
  const {t, i18n} = useTranslation();
  return (
    <StyledDesc>
      <div style={{
        maxWidth: `95%`,
      }}>
        {t('app.description-1')}
        <br /> <br />
        {t('app.description-2')}
        <a>Car.Wash</a>
        {t('app.description-3')}
        <br />
        {t('app.description-4')}
        <br /><br />
        <Button 
        colorScheme="primary"
        sizeScheme="primary"
        fontScheme="primary"
        onClick={(e) => {
          e.preventDefault();
          window.location.href='https://bitbucket.org/stc-innopolis/car.wash/src/main/';
          }}
      > {t('app.go')} </Button>
      <br/><br/><div style={{'height': '15px'}}></div>
      </div>
    </StyledDesc>
  );
};
