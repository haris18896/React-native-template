/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

// ** Custom Components
import {WP} from '../../../infrustructure/theme/responsive';
import {SafeArea} from '../../../Styles/infrustucture';
import {useTheme} from '../../../infrustructure/context/ThemeContext';

const Layout = ({children, customStyles}) => {
  const {theme} = useTheme();

  return (
    <SafeArea>
      <View style={[styles.layoutContainer, customStyles]}>
        <StatusBar
          barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
        />
        {children}
      </View>
    </SafeArea>
  );
};

export {Layout};

const styles = StyleSheet.create({
  layoutContainer: {
    flexGrow: 1,
    padding: WP(4),
  },
});
