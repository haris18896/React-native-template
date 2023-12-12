import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ** Pages
import Login from '../../pages/Auth/Login';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthStack;
