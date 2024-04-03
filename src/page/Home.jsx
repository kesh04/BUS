import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from '../custom/TabNavigation'

export default function Home() {
  return (
    <View>
      <Text>keshana</Text>
      <Text style={styles.container}>
        keshana bus 
      </Text>

     
            
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    marginTop: 70,
  },
  heading: {
    color: "black",
    fontSize: 34,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});