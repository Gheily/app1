import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Main/HomeScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import CloseScreen from '../screens/Main/CloseScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarLabel:() => {return null},
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

          if (route.name === 'Directorio') {
            iconName = focused ? 'bookmarks' : 'bookmarks-outline';
          } else if (route.name === 'Registrar') {
            iconName = focused ? 'create' : 'create-outline';
          }else if (route.name === 'Cerrar Sesión') {
            iconName = focused ? 'person' : 'person-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#02CCFF",
        tabBarInactiveTintColor: '#gray',
      })}
    >
      <Tab.Screen name="Directorio" component={HomeScreen} />
      <Tab.Screen name="Registrar" component={SettingsScreen}/>
      <Tab.Screen name = "Cerrar Sesión" component={CloseScreen}/>
    
    </Tab.Navigator>
    
  );
}