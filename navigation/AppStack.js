import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import {enableScreens} from 'react-native-screens';

enableScreens();
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { white,orange,darkRed } from '../config/colors';
import {
  homeIcon,
  friendsIcon,
  campfireIcon,
  campfireIconActive,
  buyWoodIcon,
  buyWoodIconActive,
  rewardsIcon,
  rewardsIconActive,
} from '../assets/icons';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CheckScreen from '../screens/CheckScreen';
import RewardsScreen from '../screens/RewardsScreen';
import Header from './headers/header';

const active = white;
const inactive = orange;


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = ({navigation}) => (
  <Stack.Navigator 
  
  >
   
   <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ header: navigation => <Header {...navigation} /> }}
      
      
    />

</Stack.Navigator>

   
    
     );

export const RewardsScreenStack = ({navigation}) => (
  <Stack.Navigator
  
  initialRouteName='CheckScreen'>
    <Stack.Screen
      name="CheckScreen"
      component={CheckScreen}
      options={{headerShown: false}}
      
      
    />
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{headerShown: false}}
      
      
    />


 <Stack.Screen
      name="HomeScreen"
      component={AppStack}
      options={{headerShown: false}}
      
      
    />


   
    
    
  </Stack.Navigator>

  
);













const AppStack = () => {
  
  const insets = useSafeAreaInsets();

  


  
  return (

    
    

    
    <Tab.Navigator
    
      tabBarOptions={{
        style: {backgroundColor: darkRed, height: 60 + insets.bottom},
        labelStyle: {
          fontSize: 12,
          marginBottom: 5,
          fontFamily: 'Roboto',
        },
        activeTintColor: white,
        inactiveTintColor: orange,
        tabStyle: {height: 60},
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={({route}) => ({
          
          tabBarIcon: ({focused}) => {
            let iconColor;
            if (route.name === 'HomeScreen') {
              iconColor = focused ? active : inactive;
            }
            return (
              <SvgXml xml={homeIcon} width="22" height="22" fill={iconColor} />
            );
          },
        
        })}
        listeners={({navigation}) => ({
          tabPress: () => {
            navigation.navigate('HomeScreen', {screen: 'HomeScreen'});
          },
        })}
        component={HomeStack}
      />

<Tab.Screen
        name="RewardsScreen"
        options={({route}) => ({
          tabBarVisible: false,
          tabBarIcon: ({focused}) => {
            let iconColor;
            if (route.name === 'RewardsScreen') {
              iconColor = focused ? active : inactive;
            }
            return (
              <SvgXml
                xml={friendsIcon}
                width="22"
                height="22"
                fill={iconColor}
              />
            );
          },
        })}
        listeners={({navigation}) => ({
          tabPress: () => {
            navigation.navigate('RewardsScreen', {screen: 'RewardsScreen'});
          },
        })}
        component={HomeStack}
      />
      {/* <Tab.Screen
        name="Friends"
        options={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconColor;
            if (route.name === 'Friends') {
              iconColor = focused ? active : inactive;
            }
            return (
              <SvgXml
                xml={friendsIcon}
                width="22"
                height="22"
                fill={iconColor}
              />
            );
          },
        })}
        listeners={({navigation}) => ({
          tabPress: () => {
            navigation.navigate('Friends', {screen: 'Friends'});
          },
        })}
        component={HomeStack}
      /> */}
      <Tab.Screen
        name="Games"
        options={({route}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <SvgXml
                xml={focused ? campfireIconActive : campfireIcon}
                width="22"
                height="22"
              />
            );
          },
        })}
        listeners={({navigation}) => ({
          tabPress: () => {
            navigation.navigate('Games', {screen: 'Games'});
          },
        })}
        component={HomeStack}
      />
      <Tab.Screen
        name="Buy wood"
        options={({route}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <SvgXml
                xml={focused ? buyWoodIconActive : buyWoodIcon}
                width="22"
                height="22"
              />
            );
          },
        })}
        listeners={({navigation}) => ({
          tabPress: () => {
            navigation.navigate('Buy wood', {screen: 'Buy wood'});
          },
        })}
        component={HomeStack}
      />
      <Tab.Screen
        name="Rewards"
        options={({route}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <SvgXml
                xml={focused ? rewardsIconActive : rewardsIcon}
                width="20"
                height="20"
              />
            );
          },
        })}
        listeners={({navigation}) => ({
          tabPress: () => {
            navigation.navigate('Rewards', {screen: 'Rewards'});
          },
        })}
        component={HomeStack}
      />
      
      
    </Tab.Navigator>
  );
};


export default AppStack;