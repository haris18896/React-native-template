import styled from 'styled-components';
import {Image, Pressable, Text, View} from 'react-native';

// ** Auth Screen Main Components
export const AuthWrapper = styled(View)`
  margin: ${props => props.theme.WP('5')}px;
`;

export const AuthTitle = styled(Text)`
  font-size: ${props => props.theme.WP('4.7')}px;
  color: ${props => props.theme.DefaultPalette().primary.contrastText};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

export const AuthContainer = styled(View)`
  flex: 1;
  height: 100%;
  flex-basis: auto;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${props => props.theme.WP('2')}px;
  margin-bottom: ${props => props.theme.WP('2')}px;
`;

// ************************************************************************************************************************************
// ** Page Navigation between Registration and Login

export const AccountActionWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.WP('4')}px;
  margin-bottom: ${props => props.theme.WP('4')}px;
`;

export const AccountActionTitle = styled(Text)`
  text-align: center;
  color: ${props => props?.labelColor};
  padding: ${props => props.theme.WP('2')}px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.WP('3.5')}px;
  font-family: ${props => props.theme.fonts.PoppinsMedium};
`;

// ************************************************************************************************************************************
// ** User Activity
export const UserActivityWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.WP('1')}px;
`;

export const AuthActivityLabel = styled(Text)`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-family: ${props => props.theme.fonts.PoppinsMedium};
  color: ${props => props.theme.DefaultPalette().labels.primaryLabel};
  font-size: ${props => props.theme.WP('3')}px;
`;

// ************************************************************************************************************************************
// ** Profile Screen

export const ProfileAvatarWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.theme.HP('35')}px;
`;

export const ProfileAvatarContainer = styled(View)`
  position: relative;
  width: ${props => props.theme.WP('40')}px;
  height: ${props => props.theme.WP('40')}px;
  border-radius: ${props => props.theme.WP('50')}px;
`;

export const ProfileEditAvatar = styled(Image)`
  width: ${props => props.theme.WP('39.5')}px;
  height: ${props => props.theme.WP('39.5')}px;
  border-radius: ${props => props.theme.WP('50')}px;
`;

export const EditProfileAvatar = styled(Pressable)`
  position: absolute;
  top: ${props => props.theme.WP('7')}px;
  right: ${props => props.theme.WP('0')}px;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.WP('7')}px;
  height: ${props => props.theme.WP('7')}px;
  border-radius: ${props => props.theme.WP('5')}px;
  border-color: ${props => props.theme.DefaultPalette().borders.inputBorder};
  background-color: ${props => props.theme.DefaultPalette().primary.extraLight};
`;

export const EditProfileContainer = styled(View)`
  flex: 1;
  height: 100%;
  flex-basis: auto;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: ${props => props.theme.WP('2')}px;
  margin-bottom: ${props => props.theme.WP('2')}px;
`;

export const NotificationLabel = styled(Text)`
  font-size: ${props => props.theme.WP('3')}px;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-family: ${props => props.theme.fonts.PoppinsRegular};
  color: ${props => props.theme.DefaultPalette().labels.secondaryLabel};
`;

// ************************************************************************************************************************************
// ** DELETE Account
export const ModalContainer = styled(View)`
  padding: ${props => props.theme.WP(1)}px;
`;
