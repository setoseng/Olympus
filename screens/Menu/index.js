import React, { useReducer, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { colors, Texts } from '../../theme';

import { actionCreators, reducer, initialState } from '../../data.js'


const MenuScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchPost() {
      dispatch(actionCreators.loading())
      try {
        const response = await fetch(
          'https://bobachimp.com/getMenuType'
        )
        const menuType = await response.json()
        dispatch(actionCreators.success(menuType))
      } catch (error) {
        dispatch(actionCreators.failure())
        console.log(error);
      }
    }
    fetchPost()
  }, [])
  const { menuType, loading, error } = state
  if(loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator animating={true} />
      </View>
    )
  }
  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load menu</Text>
      </View>
    )
  }
  return(
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item.id}
      data={menuType}
      renderItem={({ item: { id, name, description }, index }) => (
        <View key={id} style={styles.menu}>
          <Text style={styles.title}>
            {id}: {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ACDA5',
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

export default MenuScreen