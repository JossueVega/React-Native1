import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import OtroMas from '../Screens/OtroMas';
import SaberDe1 from '../Screens/SaberDe1';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';

const Tab = createBottomTabNavigator();

export default function SaberDe(){
    return(
        <Tab.Navigator
            initialRouteName="Saber"
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
                name="Saber"
                component={SaberDe1}
                options={{
                    tabBarLabel:"Saber de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Otro"
                component={OtroMas}
                options={{
                    tabBarLabel:"Otro Mas",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

