import styled from 'styled-components';
import {Text, View} from 'react-native';

export const ModalValueContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom-width: 1px;
  padding-bottom: ${props => props.theme.WP(1)}px;
  margin-bottom: ${props => props.theme.WP(2)}px;
  border-bottom-color: ${props =>
    props.theme.DefaultPalette().borders.inputBorder};
`;

export const ModalTitle = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-size: ${props => props.theme.WP(3)}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  min-width: ${props => props.theme.WP(25)}px;
`;

export const ModalValue = styled(Text)`
  color: ${props => props.theme.DefaultPalette().grey.dark};
  font-size: ${props => props.theme.WP(3)}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  max-width: ${props => props.theme.scrWidth - props.theme.WP(50)}px;
  margin-left: ${props => props.theme.WP(2)}px;
`;
