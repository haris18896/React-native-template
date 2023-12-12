import {StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {
  BadgeGradient,
  BadgeWrapper,
  ProfilePrimaryLabel,
} from '../../../Styles/components';
import {IconButton} from 'react-native-paper';

const Badge = props => {
  const {
    icon,
    data,
    label,
    iconSize,
    labelColor,
    iconColor,
    onPress = () => {},
    rightIcon = false,
    badgeBG = 'transparent',
    labelColorBG = 'transparent',
  } = props;

  const linearGR = !data
    ? ['transparent', 'transparent']
    : data && data === parseInt(1, 10)
    ? ['#1E1E1E', '#4F4F4F']
    : ['#E3B221', '#FFFD86'];

  return (
    <BadgeGradient colors={linearGR}>
      <BadgeWrapper bg={badgeBG} onPress={onPress}>
        <IconButton
          icon={icon}
          size={iconSize}
          iconColor={iconColor}
          style={styles.icon}
        />
        <ProfilePrimaryLabel bg={labelColorBG} color={labelColor}>
          {label}
        </ProfilePrimaryLabel>
        {rightIcon && (
          <IconButton
            icon={'star'}
            size={iconSize}
            iconColor={iconColor}
            style={styles.icon}
          />
        )}
      </BadgeWrapper>
    </BadgeGradient>
  );
};
export default memo(Badge);

const styles = StyleSheet.create({
  icon: {
    padding: 0,
    margin: 0,
  },
});
