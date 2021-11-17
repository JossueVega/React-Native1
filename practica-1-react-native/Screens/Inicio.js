import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Text h2>Bienvenidos</Text>
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