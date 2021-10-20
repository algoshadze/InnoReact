/* eslint-disable react/prop-types */
import React from 'react';

import {ButtonLocales as StyledButtonLocales} from './button-locales.styled';
export const ButtonLocales = (props) => (<StyledButtonLocales {...props}>
  {props.children}
</StyledButtonLocales>);


