import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
