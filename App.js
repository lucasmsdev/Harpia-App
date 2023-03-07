
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Login from './src/pages/screens/Login';
import Register from './src/pages/screens/Register';
import Inicio from './src/pages/screens/Inicio';
import Perfil from './src/pages/screens/Perfil';
import Pesquisar from './src/pages/screens/Pesquisar'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen 
      name="Inicio" 
      component={Inicio}  
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
      />

      <Tab.Screen 
      name="Perfil" 
      component={Perfil} 
      options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
      />

      <Tab.Screen 
      name="Pesquisar" 
      component={Pesquisar} 
      options={{
        tabBarLabel: 'Pequisar',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicio" component={HomeTabs}  />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Pesquisar" component={Pesquisar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 export default App;

 
