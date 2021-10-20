import styled from 'styled-components';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {FONTS_WEIGHT} from '../../constants/fonts-weight';

const theme = {
  primary: {
    color: COLORS.secondary,
    background: COLORS.primary,
    font: FONTS.primary,
    fonts_weight: FONTS_WEIGHT.primary,
  },
  secondary: {
    color: COLORS.primary,
    background: COLORS.secondary,
    font: FONTS.secondary,
    fonts_weight: FONTS_WEIGHT.secondary,

  },
  disabled_primary: {
    color: COLORS.fourth,
    background: COLORS.third,
  },
  disabled_secondary: {
    color: COLORS.fifth,
    background: COLORS.fourth,
  },
};

export const StyledButton = styled.button`

background-color: ${(props) => theme[props.colorScheme].background};
color: ${(props) => theme[props.colorScheme].color};
font: ${(props) => theme[props.fontScheme].font};
font-weight: ${(props) => theme[props.fontScheme].fonts_weight};
`;
