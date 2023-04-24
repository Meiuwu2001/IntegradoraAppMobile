import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Multimedia from "../screens/Multimedia";
import Usuarios from "../screens/Usuarios";
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Homescreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "purple",
            }}
        >
            <Tab.Screen 
                name="Home2"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-outline" size={26} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Multimedia" 
                component={Multimedia}
                options={{
                    tabBarLabel: 'Multimedia',
                    tabBarIcon: ({color, size}) => (
                    <Ionicons name="flower-outline" size={26} color={color} />
                    ),
                    headerShown: false,
                }} 
            />
            <Tab.Screen 
                name="Usuarios" 
                component={Usuarios}
                options={{
                    tabBarLabel: 'Usuarios',
                    tabBarIcon: ({color, size}) => (
                    <Ionicons name="person-outline" size={26} color={color} />
                    ),
                    headerShown: false,
                }} 
            />
        </Tab.Navigator>
    );
};

export default BottomTab;