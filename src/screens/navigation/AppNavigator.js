import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Login';
import SplashScreen from '../SplashScreen';
import Login2 from '../Login/Login2';
import ResetPass from '../ResetPassword';
import ResetPass2 from '../ResetPassword/ResetPass2';
import ResetPass3 from '../ResetPassword/ResPass3';
import PasswordSuccess from '../ResetPassword/PasswordSuccess';
import HomeScreen from '../HomeScreen';
import CalendarScreen from '../CalendarScreen';
import ProfileScreen from '../ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/Feather';
import ApplyLeave from '../CalendarScreen/ApplyLeave';
import { Text, View, StyleSheet } from 'react-native';
import LeaveStatus from '../LeaveApplied/LeaveStatus';
import Attendance from '../Attendance';
import AttendanceHistory from '../Attendance/AttendanceHistory';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Calendar Stack to include ApplyLeave screen under the Calendar tab
const CalendarStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="ApplyLeave" component={ApplyLeave} />
      <Stack.Screen name="LeaveStatus" component={LeaveStatus} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="AttendanceHistory" component={AttendanceHistory} />
      {/* Add other screens related to calendar if needed */}
    </Stack.Navigator>
  );
};

// Bottom Tabs with the necessary icons
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#6545CA' },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#D3D3D3',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarStack} // Use the CalendarStack here
        options={{
          tabBarIcon: ({ color, size }) => <CalendarIcon name="calendar-week" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <ProfileIcon name="clock" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Main Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="ResetPass" component={ResetPass} />
        <Stack.Screen name="ResetPass2" component={ResetPass2} />
        <Stack.Screen name="ResetPass3" component={ResetPass3} />
        <Stack.Screen name="PasswordSuccess" component={PasswordSuccess} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6545CA',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default AppNavigator;
