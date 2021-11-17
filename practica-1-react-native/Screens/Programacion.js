import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Programacion = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> </Text>
            <Button 
                title="Java Script" 
                onPress={()=>navigation.navigate('Java')}
            />
            <Button 
                title="React" 
                onPress={()=>navigation.navigate('react')}
            />
        </View>
    )
}

export default Programacion

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#198754',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});