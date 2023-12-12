import styled from 'styled-components';
import {Text, View, Image, Pressable} from 'react-native';

export const Title = styled(Text)`
  font-size: ${props => props.theme.fontSizes.title};
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
`;

export const HomeLabel = styled(Text)`
  font-size: ${props => props.theme.WP('3.5')}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
`;

export const HomeEmptyState = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeEmptyImage = styled(Image)`
  width: ${props => props.theme.WP('38')}px;
  height: ${props => props.theme.WP('32')}px;
`;

export const HomeEmptyStateLabel = styled(Text)`
  font-size: ${props => props.theme.WP('3.5')}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  margin-top: ${props => props.theme.WP('2')}px;
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
`;

export const PressableBG = styled(Pressable)`
  background-color: ${props => props.theme.DefaultPalette().background.table};
  padding-left: ${props => props.theme.WP('2')}px;
  padding-right: ${props => props.theme.WP('2')}px;
  padding-top: ${props => props.theme.WP('1')}px;
  padding-bottom: ${props => props.theme.WP('1')}px;
  border-radius: ${props => props.theme.WP('10')}px;
`;

export const InfrustuctureLabel = styled(Text)`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  color: ${props => props.theme.DefaultPalette().common.white};
  font-size: ${props => props.theme.WP('3')}px;
`;
