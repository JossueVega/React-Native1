import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Contacto1() {
    return (
        <View style={styles.container}>
            <Text h3>Contacto1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#20c997',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});