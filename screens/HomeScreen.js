import { StyleSheet} from 'react-native'
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles';

export function HomeScreen({navigation,route}) {
  

  useEffect(() => {
    console.log('Use-effect in Home')
    }
    , [])

return (
  <View style={styles.container}>
   <Text>This is the HomeScreen</Text>
  </View>
)
}

