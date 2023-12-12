import styled from 'styled-components';
import {Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';

export const StatisticsWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const StatisticButton = styled(TouchableOpacity)`
  border-width: 1px;
  border-color: ${props => props.theme.DefaultPalette().borders.inputBorder};
  background-color: ${props => (props?.bg ? props?.bg : 'transparent')};
  margin-left: ${props => props.theme.WP('2')}px;
  padding-left: ${props => props.theme.WP('2')}px;
  padding-right: ${props => props.theme.WP('2')}px;
  padding-top: ${props => props.theme.WP('1')}px;
  padding-bottom: ${props => props.theme.WP('1')}px;
  border-radius: ${props => props.theme.WP('10')}px;
  margin-top: ${props => props.theme.WP('1')}px;
  margin-bottom: ${props => props.theme.WP('1')}px;
`;

export const StatisticLabel = styled(Text)`
  color: ${props =>
    props?.color
      ? props?.color
      : props.theme.DefaultPalette().labels.secondaryLabel};
`;

export const ShotStatisticsCardWrapper = styled(View)`
  flex-direction: row;
  border-width: 1px;
  padding: ${props => props.theme.WP('2.5')}px;
  border-color: ${props => props.theme.DefaultPalette().borders.inputBorder};
  border-radius: ${props => props.theme.WP('5')}px;
  margin-top: ${props => props.theme.WP('2')}px;
  min-height: ${props => props.theme.WP('30')}px;
`;

export const ShotStatisticsImageWrapper = styled(View)`
  width: ${props => props.theme.WP('32')}px;
`;

export const StatisticImage = styled(Image)`
  border-radius: ${props => props.theme.WP('3')}px;
  width: ${props => props.theme.WP('25')}px;
  height: ${props => props.theme.WP('25')}px;
  margin: ${props => props.theme.WP('2')}px;
`;

export const StatisticDetailsWrapper = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 55%;
`;

export const StatisticTitle = styled(Text)`
  font-size: ${props => props.theme.WP('3.5')}px;
  font-family: ${props => props.theme.fonts.PoppinsSemiBold};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  line-height: ${props => props.theme.WP('4')}px;
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  margin-bottom: ${props => props.theme.WP('2')}px;
`;

export const StatisticLabelWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom-width: 1px;
  padding-top: ${props => props.theme.WP('2')}px;
  border-bottom-color: ${props =>
    props?.isLastItem
      ? 'transparent'
      : props.theme.DefaultPalette().borders.inputBorder};
`;

export const StatisticValue = styled(Text)`
  width: ${props => props?.wd};
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-size: ${props => props.theme.WP('3')}px;
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

// export const GraphWrapper = styled(View)`
//   margin-top: ${props => props.theme.WP(2)}px;
//   margin-bottom: ${props => props.theme.WP(5)}px;
//   overflow: hidden;
// `;

export const GraphWrapper = styled(View)`
  overflow: hidden;
  min-height: ${props => props.theme.WP(70)}px;
  align-items: center;
  justify-content: center;
`;

export const GraphContainer = styled(ScrollView)`
  margin-top: ${props => props.theme.WP(2)}px;
  margin-bottom: ${props => props.theme.WP(5)}px;
`;

export const GraphLabelWrapper = styled(View)`
  min-width: ${props => props.theme.WP(3)}px;
  height: ${props => props.theme.WP(10)}px;
  margin-top: ${props => props.theme.WP(0.7)}px;
`;

export const GraphLabel = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-size: ${props => props.theme.WP(2.2)}px;
  text-align: center;
  vertical-align: middle;
`;

export const DataPointWrapper = styled(View)`
  height: ${props => props.theme.WP(3)}px;
  width: ${props => props.theme.WP(3)}px;
  border-width: ${props => props.theme.WP(0.7)}px;
  border-radius: ${props => props.theme.WP(10)}px;
  background-color: ${props => props.theme.DefaultPalette().primary.same};
  border-color: ${props =>
    props?.borderColor
      ? props?.borderColor
      : props.theme.DefaultPalette().primary.contrastText};
`;

export const PopoverWrapper = styled(View)`
  z-index: 1000;
  border-width: 2px;
  justify-content: center;
  min-height: ${props => props.theme.WP(22)}px;
  padding: ${props => props.theme.WP(3)}px;
  border-radius: ${props => props.theme.WP(2)}px;
  border-color: ${props => props.theme.DefaultPalette().borders.inputBorder};
  background-color: ${props => props.theme.DefaultPalette().background.paper};
`;

export const PopoverTitle = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-size: ${props => props.theme.WP(3.5)}px;
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.WP(1)}px;
`;

export const PopoverDetails = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: ${props => props.theme.WP(1)}px;
  padding-top: ${props => props.theme.WP(1)}px;
  border-bottom-width: ${props => (props?.borderBottom ? 1 : 0)}px;
  border-color: ${props => props.theme.DefaultPalette().borders.inputBorder};
`;

export const PopoverText = styled(Text)`
  color: ${props => props.theme.DefaultPalette().grey.dark};
  font-size: ${props => props.theme.WP(3)}px;
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-weight: ${props => props.theme.fontWeights.medium};
`;
