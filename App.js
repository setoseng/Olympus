import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from './screens/LogIn'
import HomeScreen from './screens/Home';
import MenuScreen from './screens/Menu';
import EditMenuScreen from './screens/EditMenu';

import AddMenuType from './screens/EditMenu/Screens/AddMenuType';


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
        <Stack.Group>
          <Stack.Screen name="LogIn" component={LogInScreen} options={{ title: 'Log In' }}/>
          <Stack.Screen name="Home" component ={HomeScreen}/>
          <Stack.Screen name="Menu" component ={MenuScreen}/>
          <Stack.Screen name="EditMenu" component ={EditMenuScreen}/>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Add Menu Type" component ={AddMenuType}/>
          {/* <Stack.Screen name="Remove Menu Type" component ={RemoveMenuType}/>
          <Stack.Screen name="Add Menu Item" component ={RemoveMenuType}/>
          <Stack.Screen name="Remove Menu Item" component ={RemoveMenuType}/> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

