import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Contacto2 from '../Screens/Contacto2';
import Contacto1 from '../Screens/Contacto1';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';

const Tab = createBottomTabNavigator();

export default function Contactos(){
    return(
        <Tab.Navigator
            initialRouteName="Contacto1"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            
            <Tab.Screen
                name="Contacto1"
                component={Contacto1}
                options={{
                    tabBarLabel:"Contacto 1",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Contacto2"
                component={Contacto2}
                options={{
                    tabBarLabel:"Contacto 2",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}