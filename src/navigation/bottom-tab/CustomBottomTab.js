import React from 'react';
// import {Image} from 'react-native';

// ** Custom Components
import {AppBottomTab} from '../../utils/constants';
// import {theme as AppTheme} from '../../infrustructure/theme';
import {BottomTabBarWrapper, BottomTabButton} from '../../Styles/infrustucture';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <BottomTabBarWrapper>
      {AppBottomTab.map((item, index) => (
        <BottomTabButton
          key={index}
          onPress={() => navigation.navigate(item.screen)}>
          {/*<Image*/}
          {/*  source={state.index === index ? item.iconActive : item.icon}*/}
          {/*  style={{width: 25, height: 25}}*/}
          {/*  resizeMode={'cover'}*/}
          {/*/>*/}
        </BottomTabButton>
      ))}
    </BottomTabBarWrapper>
  );
};

export default CustomTabBar;
