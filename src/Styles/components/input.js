import styled from 'styled-components';
import {Text, TextInput, View} from 'react-native';

export const TextInputWrapper = styled(View)`
  width: 100%;
  position: relative;
  flex-direction: column;
  margin-bottom: ${props => props.theme.WP('6')}px;
`;

export const InputLabel = styled(Text)`
  font-size: ${props => props.theme.WP('3.5')}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsRegular};
  margin-left: ${props => props.theme.WP('3.5')}px;
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
`;

export const InputContainer = styled(View)`
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  padding-left: ${props =>
    props?.left ? props.theme.WP('8') : props.theme.WP('3')}px;
  padding-right: ${props =>
    props?.right || props?.secureTextEntry
      ? props.theme.WP('11')
      : props.theme.WP('0')}px;
  margin-top: ${props => props.theme.WP('1')}px;
  border-radius: ${props => props.theme.WP('10')}px;
  background-color: ${props => props.theme.DefaultPalette().background.inputBG};
  border-color: ${props =>
    props.error
      ? props.theme.DefaultPalette().error.main
      : props.theme.DefaultPalette().borders.inputBorder};
`;

export const Input = styled(TextInput)`
  text-align: left;
  width: 100%;
  font-size: ${props => props.theme.WP('3')}px;
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  padding-left: ${props => props.theme.WP('1')}px;
  padding-right: ${props => props.theme.WP('2')}px;
  padding-top: ${props => props.theme.WP('1.5')}px;
  padding-bottom: ${props => props.theme.WP('1.5')}px;
  margin-right: ${props => props.theme.WP('1')}px;
  height: ${props => props.theme.WP('10')}px;
`;

export const LeftIconWrapper = styled(View)`
  position: absolute;
  top: ${props => props.theme.WP('0.45')}px;
  left: ${props => props.theme.WP('1.5')}px;
  padding: ${props => props.theme.WP('2')}px;
`;

export const RightIconWrapper = styled(View)`
  position: absolute;
  top: ${props => props.theme.WP('0.45')}px;
  right: ${props => props.theme.WP('1.5')}px;
  padding: ${props => props.theme.WP('2')}px;
`;
