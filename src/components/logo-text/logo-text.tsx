import React from 'react';
import {StyledSpanLogoText} from './logo-text.styled';
import {useTranslation} from 'react-i18next';
import ButtonLocales from '../../components/button-locales';


const LogoText = () => {
  // eslint-disable-next-line no-unused-vars
  const {t, i18n} = useTranslation();
  const handleChangeLangToEn = async () => {
    await i18n.changeLanguage('en');
    window.location.reload();
  };

  const handleChangeLangToRu = async () => {
    await i18n.changeLanguage('ru');
    window.location.reload();
  };
  return (
    <>
      <StyledSpanLogoText>
        <ButtonLocales height="primary" width="primary" img="secondary"
          borderRadius="primary" onClick={handleChangeLangToRu}>
        </ButtonLocales>
      </StyledSpanLogoText>
      <StyledSpanLogoText>
        <ButtonLocales height="primary" width="primary" img="primary"
          borderRadius="primary" onClick={handleChangeLangToEn}>
        </ButtonLocales>
      </StyledSpanLogoText>
    </>
  );
};

export default LogoText;
