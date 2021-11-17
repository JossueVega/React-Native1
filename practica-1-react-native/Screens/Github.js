import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Github() {
    return (
        <View style={styles.container}>
            <Text h3>@jossuevega</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#cb4545',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});