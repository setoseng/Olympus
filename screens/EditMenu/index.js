import React, { useReducer, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import { BigButton } from '../../components/BigButton';

import { styles } from './styles';
import { colors, Texts } from '../../theme';


const EditMenuScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Add Menu Type"
        buttonColor={colors.primary}
        onPress={() => navigation.navigate("AddMenuType")}
      />
      <BigButton title="Remove Menu Type" buttonColor={colors.danger}/>
      <BigButton title="Add Menu Item" buttonColor={colors.primary}/>
      <BigButton title="Remove Menu Item" buttonColor={colors.danger}/>
    </View>
  );
}

export default EditMenuScreen