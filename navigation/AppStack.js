import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CheckScreen from '../screens/CheckScreen';


const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator options={{header: () => null}}>
      <Stack.Screen name='CheckScreen' component={CheckScreen} options={{header: () => null}} />
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{header: () => null}} />
      <Stack.Screen name='HomeScreen' component={HomeScreen}  options={{header: () => null}}/>
      
    </Stack.Navigator>
  );
}


export default AppStack;