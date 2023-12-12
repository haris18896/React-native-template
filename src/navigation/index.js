import React from 'react';

// ** Custom Styles
import {theme as AppTheme} from '../infrustructure/theme';

// ** navigators
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ** Stacks
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';

// ** Store & Actions

import {setTopLevelNavigator} from './utils';
import {Splash} from '../pages/Splash';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer
      ref={setTopLevelNavigator}
      theme={{
        colors: {
          background: AppTheme.DefaultPalette().background.paper,
        },
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name="App" component={AppStack} />
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
