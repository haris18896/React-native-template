import styled from 'styled-components';
import {Text, View, Image, ScrollView} from 'react-native';

export const VQEligibilityWrapper = styled(View)`
  flex: 1;
  margin-top: ${props => props.theme.WP('5')}px;
  padding-left: ${props => props.theme.WP('1')}px;
  padding-right: ${props => props.theme.WP('1')}px;
`;

export const VQEligibilityContainer = styled(View)`
  margin-bottom: ${props => props.theme.WP('5')}px;
`;

export const VQEligibilityLabel = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-family: ${props => props.theme.fonts.PoppinsSemiBold};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.WP('4')}px;
`;

export const VQEligibilityDetail = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.WP('3')}px;
`;

export const EligibilityStateWrapper = styled(View)`
  background-color: transparent;
  padding: ${props => props.theme.WP('1')}px;
  border-radius: ${props => props.theme.WP('2')}px;
  flex: 1;
  height: 100%;
`;

export const EligibilityContainer = styled(View)`
  border-radius: ${props => props.theme.WP('4')}px;
  padding: ${props => props.theme.WP('2')}px;
  margin: ${props => props.theme.WP('1')}px;
  background-color: ${props =>
    props?.bg ? props?.bg : props.theme.DefaultPalette().secondary.dark};
  overflow: hidden;
  position: relative;
`;

export const EligibilityBallContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${props => props.theme.WP('2')}px;
`;

export const EligibilityBallImage = styled(Image)`
  width: ${props => props.theme.WP('4')}px;
  height: ${props => props.theme.WP('4')}px;
`;

export const EligibilityBallImageName = styled(Text)`
  margin-left: ${props => props.theme.WP('1.5')}px;
  color: ${props => props.theme.DefaultPalette().common.white};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-size: ${props => props.theme.WP('3')}px;
`;

export const EligibilityLabel = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-size: ${props => props.theme.WP('4')}px;
`;

export const EligibilityMonth = styled(Text)`
  color: ${props => props.theme.DefaultPalette().common.gray};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-size: ${props => props.theme.WP('2.3')}px;
  margin-left: ${props => props.theme.WP('1')}px;
`;

export const EligibilityTag = styled(View)`
  top: 0;
  right: 0;
  z-index: 3;
  position: absolute;
  width: ${props => props.theme.WP('20')}px;
  height: ${props => props.theme.WP('25')}px;
  background-color: ${props =>
    props?.qualified
      ? props.theme.DefaultPalette().success.main
      : props.theme.DefaultPalette().error.main};
`;
