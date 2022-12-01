import * as React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const AddMenuType = ({ route, navigation }) => {
  return(
    <View style={styles.container}>
      <Text>Enter the information required for the menu type</Text>
      <Text>Menu Type Name</Text>
      <TextInput
        placeholder="Menu Type Name"
      />
    </View>
  )
}

export default AddMenuType

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 20,
    paddingRight: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: '#F8F8F8',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})