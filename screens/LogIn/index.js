import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Button, Text, View, TextInput } from 'react-native';

import { styles } from './styles.js'

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
      <View style={styles.loginButton}>
        <Button
          title="Log In"
          color="white"
          style={styles.loginButtonText}
          onPress={() => {navigation.push("Home")}}
        />
      </View>
    </View>
  )
}

export default LogInScreen;