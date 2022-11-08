import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

import styles from './styles.js'

const LogInScreen = ({ route, navigation }) => {
  const [text, onChangeText] = React.useState("");
  return(
    <View style={styles.container}>
      <StatusBar style="default" />
      <Text style={styles.title}>User Name</Text>
      <TextInput
        style={styles.input}
        onChange={onChangeText}
        value={text}
      />
      <Text style={styles.title}>Password</Text>
      <TextInput
        style={styles.input}
        onChange={onChangeText}
        value={text}
      />
      <Button
        title="LogIn"
        style={styles.loginButton}
        onPress={() => {navigation.push("Home")}}
      />
    </View>
  )
}

export default LogInScreen;