import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Java() {
    return (
        <View style={styles.container}>
            <Text h4>Java Script</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffc107',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});