import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Inicio from '../Screens/Inicio';
import Github from '../Screens/Github';
import Programacion from '../Navigations/StackNavigation2';
import Contactos from '../Screens/Contactos';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
import Constants from 'expo-constants';

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Git"
                component={Github}
                options={{
                    tabBarLabel:"Github",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Programacion"
                component={Programacion}
                options={{
                    tabBarLabel:"Programacion",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-react"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Contactos"
                component={Contactos}
                options={{
                    tabBarLabel:"Contactos",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}