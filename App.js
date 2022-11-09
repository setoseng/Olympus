import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from './screens/LogIn'
import HomeScreen from './screens/Home';
import MenuScreen from './screens/Menu';
import EditMenuScreen from './screens/EditMenu';

import { colors, Texts } from './theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="LogIn" component={LogInScreen} options={{ title: 'Log In' }}/>
        <Stack.Screen name="Home" component ={HomeScreen}/>
        <Stack.Screen name="Menu" component ={MenuScreen}/>
        <Stack.Screen name="EditMenu" component ={EditMenuScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

