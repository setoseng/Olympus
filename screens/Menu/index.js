import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import { styles } from './styles';
import { colors, Texts } from '../../theme';


const MenuScreen = ({ route, navigation }) => {
  React.useEffect(() => {
    if(route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Text>Hello From Menu Screen</Text>
    </View>
  );
}

export default MenuScreen