import styled from 'styled-components';
import {DataTable} from 'react-native-paper';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  background-color: ${props => props.theme.DefaultPalette().background.paper};
`;

export const Container = styled(View)`
  flex: 1;
  margin-bottom: ${props => props.theme.WP('2')}px;
`;

export const BottomTabBarWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${props => props.theme.WP('2')}px;
  padding-right: ${props => props.theme.WP('2')}px;
  elevation: ${props => props.theme.HP('1')};
  z-index: ${props => props.theme.HP('10')};
  background-color: ${props => props.theme.DefaultPalette().common.bottomBarBG};
`;

export const BottomTabButton = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: ${props => props.theme.WP('5')}px;
  padding-top: ${props => props.theme.WP('5')}px;
  margin: ${props => props.theme.WP('1')}px;
`;

export const ErrorText = styled(Text)`
  font-size: ${props => props.theme.WP('3.5')}px;
  color: ${props => props.theme.DefaultPalette().error.main};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
`;

export const Divider = styled(View)`
  width: ${props => props.theme.WP(`${props?.width}`)}px;
  height: ${props => props.theme.WP('0.3')}px;
  margin: ${props => props.theme.WP('1')}px;
  background-color: ${props =>
    props.theme.DefaultPalette().borders.inputBorder};
`;

export const CheckBoxWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CheckBoxLabel = styled(Text)`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  color: ${props => props.theme.DefaultPalette().labels.primaryLabel};
  font-size: ${props => props.theme.WP('3')}px;
`;

export const SpaceBetweenWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;

export const SpaceAroundWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-around;
`;

export const RowSpaceAround = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const RowCenter = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${props => (props?.width ? props?.width : 'auto')};
`;

export const RowStart = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ColumnStart = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RowEnd = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ColumCenter = styled(View)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SpacerWrapper = styled(View)`
  margin-left: ${props =>
    props?.left ? props.theme.WP(`${props?.left}`) : '0'}px;
  margin-right: ${props =>
    props?.right ? props.theme.WP(`${props?.right}`) : '0'}px;
  margin-bottom: ${props =>
    props?.bottom ? props.theme.WP(`${props?.bottom}`) : '0'}px;
  margin-top: ${props =>
    props?.top ? props.theme.WP(`${props?.top}`) : '0'}px;
  margin: ${props =>
    props?.margin ? props.theme.WP(`${props?.margin}`) : '0'}px;
`;

export const TopHeaderLabel = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-size: ${props => props.theme.WP('4')}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
`;

export const Logo = styled(Image)`
  width: ${props => props.theme.WP(10)}px;
  height: ${props => props.theme.WP(10)}px;
  border-radius: ${props => props.theme.WP(1.5)}px;
`;

export const IconPlaceholder = styled(View)`
  width: ${props => props.theme.WP(12)}px;
  height: ${props => props.theme.WP(12)}px;
`;

export const Title = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-size: ${props => props.theme.WP('4')}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
`;

export const CardWrapper = styled(View)`
  margin-top: ${props => props.theme.WP('4')}px;
`;

export const Card = styled(View)`
  padding-top: ${props =>
    props?.padding ? props.theme.WP(props?.padding[0]) : props.theme.WP('5')}px;
  padding-right: ${props =>
    props?.padding ? props.theme.WP(props?.padding[1]) : props.theme.WP('5')}px;
  padding-bottom: ${props =>
    props?.padding ? props.theme.WP(props?.padding[0]) : props.theme.WP('5')}px;
  padding-left: ${props =>
    props?.padding ? props.theme.WP(props?.padding[1]) : props.theme.WP('5')}px;
  border-radius: ${props =>
    props?.padding ? props.theme.WP('15') : props.theme.WP('5')}px;
  background-color: ${props =>
    props?.color ? props?.color : props.theme.DefaultPalette().primary.dark};
`;

export const BallsWrapper = styled(View)`
  margin-left: ${props => props.theme.WP('2')}px;
`;

export const BallButton = styled(TouchableOpacity)`
  border-width: 1px;
  border-color: ${props => props.theme.DefaultPalette().borders.inputBorder};
  background-color: ${props => (props?.bg ? props?.bg : 'transparent')};
  margin-left: ${props => props.theme.WP('3')}px;
  padding-left: ${props => props.theme.WP('2')}px;
  padding-right: ${props => props.theme.WP('2')}px;
  padding-top: ${props => props.theme.WP('1')}px;
  padding-bottom: ${props => props.theme.WP('1')}px;
  border-radius: ${props => props.theme.WP('10')}px;
`;

export const BallLabel = styled(Text)`
  color: ${props =>
    props?.color
      ? props?.color
      : props.theme.DefaultPalette().labels.secondaryLabel};
`;

// ************************************************************************************************

export const DisciplineWrapper = styled(View)`
  margin-top: ${props => props.theme.WP('2')}px;
  flex-direction: column;
`;

export const DisciplineHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-left: ${props => props.theme.WP('2')}px;
  margin-bottom: ${props => props.theme.WP('2')}px;
  width: 58%;
`;

export const Table = styled(DataTable)`
  border-width: 0;
  margin: 0;
  padding: 0;
`;

export const TableHeader = styled(DataTable.Header)`
  background-color: ${props => (props?.bg ? props?.bg : 'transparent')};
  border-radius: ${props => props.theme.WP('10')}px;
  border-width: 0;
  margin-bottom: 5px;
`;

export const TableTitle = styled(DataTable.Title)`
  margin-top: 0;
  margin-bottom: 0;
  padding: ${props => props.theme.WP('1')}px;
  align-items: center;
  border-width: 0;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`;

export const TableRow = styled(DataTable.Row)`
  align-items: center;
  justify-content: center;
  border-bottom-width: ${props => (props?.isLastRow ? '0px' : '1px')};
  border-color: ${props => props.theme.DefaultPalette().borders.inputBorder};
`;

export const TableCell = styled(DataTable.Cell)`
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  align-items: center;
  justify-content: ${props => (props?.center ? 'center' : 'flex-start')};
`;

export const TableCellPressable = styled(Pressable)`
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const InfoText = styled(Text)`
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-size: ${props => props.theme.WP(4)}px;
  font-family: ${props => props.theme.fonts.PoppinsSemiBold};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;
