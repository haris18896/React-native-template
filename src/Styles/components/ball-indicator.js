import styled from 'styled-components';
import {Image, Text, View} from 'react-native';

export const BallImage = styled(Image)`
  width: ${props => props.theme.WP('8')}px;
  height: ${props => props.theme.WP('8')}px;
`;

export const BallImageLabel = styled(Text)`
  margin-left: ${props => props.theme.WP('2')}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-size: ${props => props.theme.WP('3')}px;
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
`;
