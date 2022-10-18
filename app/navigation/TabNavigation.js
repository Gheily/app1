import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Main/HomeScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';

/*function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}*/

//const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarLabel:() => {return null},
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Inicio') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Buscar') {
          iconName = focused ? 'settings' : 'settings-online';
        }else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-online';
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#purple',
      tabBarInactiveTintColor: '#gray',
    })}
  >
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="settings" component={SettingsScreen} options={{headerShown: true}} />
    
    </Tab.Navigator>
    
  );
}