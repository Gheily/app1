

import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import Login from '../screens/Login';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}