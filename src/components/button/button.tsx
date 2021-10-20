/* eslint-disable react/prop-types */
import React from 'react';

import {StyledButton} from './button.styled';
export const Button = (props) => (<StyledButton {...props}>
  {props.children}
</StyledButton>);


