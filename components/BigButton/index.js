import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

import { colors } from '../../theme'

export function BigButton(props) {
  return(
    <View
      style={{
        ...styles.container,
        backgroundColor: props.buttonColor,
      }}
    >
      <Button
        title={props.title}
        color="white"
        onPress={props.onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 200,
    height: 150,
    justifyContent: 'center',
    borderRadius: 30,
  }
})
