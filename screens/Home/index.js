import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { styles } from './styles';
import { colors, Texts } from '../../theme';


const HomeScreen = ({ route, navigation }) => {
  React.useEffect(() => {
    if(route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <View style={styles.directoryButton}>
        <Button
          title="View Menu"
          color="white"
          onPress={() => navigation.navigate('Menu')}
        />
      </View>
      <View style={styles.directoryButton}>
        <Button
          title="Edit Menu"
          color="white"
          onPress={() => navigation.navigate('EditMenu')}
        />
      </View>
      <View style={styles.directoryButton}>
        <Button
          title="View Sales"
          color="white"
          onPress={() => navigation.navigate('Sales')}
        />
      </View>
      <View style={styles.directoryButton}>
        <Button
          title="Settings"
          color="white"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View style={styles.directoryButton}>
        <Button
          title="Check Out"
          color="white"
          onPress={() => navigation.navigate('CheckOut')}
        />
      </View>
    </View>
  );
}

export default HomeScreen