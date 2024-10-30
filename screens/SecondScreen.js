import { StyleSheet} from 'react-native'
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles';

export function SecondScreen() {
  useEffect(() => {
    console.log('Use-effect in SecondSreen')
    }, [])
  
  return (
    <View style={styles.container}>
     <Text>This is the SecondScreen</Text>
    </View>
  )
}
