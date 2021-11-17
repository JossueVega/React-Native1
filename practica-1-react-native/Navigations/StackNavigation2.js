import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Programacion from '../Screens/Programacion';
import react from '../Screens/react';
import Java from '../Screens/Java';

const Stack = createStackNavigator();

export default function StackNavigation2(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Programacion" component={Programacion}
            />
            <Stack.Screen name="Java" component={Java}
            />

            <Stack.Screen name="react" component={react}
            />

        </Stack.Navigator>

    )
}