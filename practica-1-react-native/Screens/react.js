import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function react() {
    return (
        <View style={styles.container}>
            <Text h4>react</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});