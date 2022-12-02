import react, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button  } from 'react-native'



const AddMenuType = ({ route, navigation }) => {
  const [name, onChangeName] = useState('')
  const [description, onChangeDescription] = useState('')

  return(
    <View style={styles.container}>
      <Text>Menu Type Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Menu Type Name"
        onChange={onChangeName}
      />
      <Text>Menu Type Description</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Menu Type Name"
        onChange={onChangeName}
      />
      <Button
        style={styles.createButton}
        title={'Create Menu Type'}
        onPress={()=> console.log('shit was pressed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  createButton : {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});

export default AddMenuType
