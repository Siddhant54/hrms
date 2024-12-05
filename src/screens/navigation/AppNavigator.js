import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import SplashScreen from '../SplashScreen';
import Login2 from '../Login/Login2';
import ResetPass from '../ResetPassword';
import ResetPass2 from '../ResetPassword/ResetPass2';
import ResetPass3 from '../ResetPassword/ResPass3';
import PasswordSuccess from '../ResetPassword/PasswordSuccess';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Login2"
          component={Login2}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
        />
        <Stack.Screen
          name="ResetPass2"
          component={ResetPass2}
        />
         <Stack.Screen
          name="ResetPass3"
          component={ResetPass3}
        />
         <Stack.Screen
          name="PasswordSuccess"
          component={PasswordSuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator