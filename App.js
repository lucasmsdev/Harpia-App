import React from 'react';
import { StatusBar } from 'react-native';

import Login from './src/pages/login';
import register from './src/pages/login/register'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#191919"
      />
      <NavigationContainer>
        <Login />
      </NavigationContainer>

    </>
  );
};