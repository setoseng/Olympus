import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
  React.useEffect(() => {
    if(route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="View Menu"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title="View Sales"
        onPress={() => navigation.navigate('Details', {
          userId: 86,
          otherParam: 'anything you want here',
        })}
      />
      <Button
        title="Option"
        onPress={() => navigation.navigate('Details', {
          userId: 86,
          otherParam: 'anything you want here',
        })}
      />
      <Button
        title="Check Out"
        onPress={() => navigation.navigate('Details', {
          userId: 86,
          otherParam: 'anything you want here',
        })}
      />
    </View>
  );
}

export default HomeScreen