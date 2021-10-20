import styled from 'styled-components';
import {HEIGHTS} from '../../constants/heights';
import {WIDTH} from '../../constants/width';
import {IMAGE} from '../../constants/image';
import {BORDER_RADIUS} from '../..//constants/border-radius';

/* eslint-disable camelcase */
const path = `${__webpack_public_path__}/remote-assets/locales`;

const theme = {
  primary: {
    height: HEIGHTS.six,
    width: WIDTH.six,
    img: IMAGE.primary,
    borderRadius: BORDER_RADIUS.primary,
  },
  secondary: {
    height: HEIGHTS.primary,
    width: WIDTH.primary,
    img: IMAGE.secondary,
    borderRadius: BORDER_RADIUS.primary,
  },
};

export const ButtonLocales = styled.button`
height: ${(props) => theme[props.height].height};
width: ${(props) => theme[props.width].width};
background-image: url("${path}/${(props) => theme[props.img].img}"); 
border-radius: ${(props) =>theme[props.borderRadius].borderRadius}; 
cursor: pointer;
`;
