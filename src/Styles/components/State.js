import styled from 'styled-components';
import {Text, View} from 'react-native';

export const StateWrapper = styled(View)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-right-width: 1px;
  width: ${props => (props?.width ? props?.width : 'auto')};
  margin: ${props => props.theme.WP('3')}px;
  border-color: ${props =>
    props?.borderRight
      ? props.theme.DefaultPalette().borders.inputBorder
      : 'transparent'};
`;

export const StateLabel = styled(Text)`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-size: ${props => props.theme.WP('3.5')}px;
`;

export const StateValueWrapper = styled(View)`
  border-width: 1px;
  margin-top: ${props => props.theme.WP('2')}px;
  padding-left: ${props => props.theme.WP('2')}px;
  padding-right: ${props => props.theme.WP('2')}px;
  padding-top: ${props => props.theme.WP('0.5')}px;
  padding-bottom: ${props => props.theme.WP('0.5')}px;
  border-radius: ${props => props.theme.WP('4')}px;
  border-color: ${props => props.theme.DefaultPalette().borders.inputBorder};
`;

export const StateValue = styled(Text)`
  padding-top: ${props => props.theme.WP(0.5)}px;
  font-size: ${props => props.theme.WP('3.5')}px;
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
`;
