import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// ** Pages
import Home from '../../pages/Home';

// ** Custom Components
import CustomTabBar from './CustomBottomTab';
import {theme as AppTheme} from '../../infrustructure/theme';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      backBehavior={'history'}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        position: 'absolute',
        tabBarStyle: {
          backgroundColor: AppTheme.DefaultPalette().common.bottomBarBG,
          borderTopWidth: 0,
          height: AppTheme.HP('10'),
        },
      }}>
      <Tab.Screen name={'Home'} component={Home} />
    </Tab.Navigator>
  );
}

export default BottomTab;
