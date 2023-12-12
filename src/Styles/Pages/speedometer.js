import styled from 'styled-components';
import {Text, View, ScrollView, Image, Pressable} from 'react-native';

export const SpeedometerScroller = styled(ScrollView)`
  flex: 1;
`;

export const SpeedometerContainer = styled(View)`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${props => props.theme.WP(3)}px;
`;

export const SpeedometerBallImg = styled(Image)`
  width: ${props => props.theme.WP('6')}px;
  height: ${props => props.theme.WP('6')}px;
`;

export const SpeedometerBallLabel = styled(Text)`
  color: white;
  font-family: ${props => props.theme.fonts.PoppinsRegular};
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-left: ${props => props.theme.WP('2')}px;
`;

export const SpeedometerGraphLayoutWrapper = styled(View)`
  position: relative;
  flex: 1;
`;

export const SpeedometerBallSpeedContainer = styled(View)`
  position: absolute;
  bottom: ${props => props.theme.WP(3)}px;
  min-width: ${props => props.theme.WP(20)}px;
  left: ${props =>
    props?.theme.scrWidth > 600 ? props.theme.WP(-40) : props.theme.WP(-25)}px;
`;

export const SpeedometerBallSpeedView = styled(View)`
  text-align: left;
  vertical-align: middle;
  margin-top: ${props => props.theme.WP(6)}px;
`;

export const SpeedometerColumn = styled(Pressable)`
  flex: 1;
  position: relative;
  max-width: ${props => (props?.width ? props?.width : '25%')};
  margin-left: ${props => props.theme.WP('1')}px;
  margin-right: ${props => props.theme.WP('1')}px;
  border-width: ${props => (props?.border ? '2' : '0')}px;
  padding: ${props => props.theme.WP('3')}px;
  border-color: ${props =>
    props?.borderChange
      ? props.theme.DefaultPalette().borders.borderSelected
      : props.theme.DefaultPalette().borders?.inputBorder};
  border-radius: ${props => props.theme.WP('5')}px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props =>
    props?.bg ? props.theme.DefaultPalette().secondary.main : 'red'};
`;

export const NullGraph = styled(View)`
  width: ${props => props.theme.WP(9)}px;
  height: ${props => props.theme.WP(9)}px;
  border-width: 2px;
  border-color: ${props => props.theme.DefaultPalette().secondary.light};
  border-radius: ${props => props.theme.WP(20)}px;
  margin: ${props => props.theme.WP('1.2')}px;
`;

export const SpeedometerGraphWrapper = styled(View)`
  border-radius: ${props => props.theme.WP('2')}px;
  flex: 1;
  height: 100%;
`;

export const SpeedometerGraphContainer = styled(View)`
  border-radius: ${props => props.theme.WP('4')}px;
  margin: ${props => props.theme.WP('1.2')}px;
  overflow: hidden;
  position: relative;
  align-items: center;
`;

export const SpeedometerBallContainer = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const SpeedometerPercentage = styled(Text)`
  color: white;
  position: absolute;
  top: ${props => props.theme.WP('2.75')}px;
  font-family: ${props => props.theme.fonts.PoppinsRegular};
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
`;
