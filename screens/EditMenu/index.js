import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import { BigButton } from '../../components/BigButton';

import { styles } from './styles';
import { colors, Texts } from '../../theme';


const EditMenuScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <BigButton title= "Add Menu Category" buttonColor={colors.primary}/>
      <BigButton title= "Remove Menu Category" buttonColor={colors.danger}/>
      <BigButton title= "Add Menu Item" buttonColor={colors.primary}/>
      <BigButton title= "Remove Menu Item" buttonColor={colors.danger}/>
    </View>
  );
}

export default EditMenuScreen