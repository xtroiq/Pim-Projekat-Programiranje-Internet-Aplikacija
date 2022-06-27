import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, StackActions} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import icon from 'react-native-vector-icons/FontAwesome';


import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SingUpScreen from '../screens/SingUpScreen';




const Stack = createStackNavigator();






const AuthStack = () => {
  const [FirstLaunch , setFirstLaunch] = useState(null);
   let routeName ;
  
   useEffect(() => {
  AsyncStorage.getItem('alreadyLaunched').then(value => {
    if(value == null) {
     AsyncStorage.setItem('alreadyLaunched', 'true');
     setFirstLaunch(true);
   
  
    } else {
      setFirstLaunch(false);
      
    }
  })
  
  }, []);

if( FirstLaunch === null) {
  
  return null;
} else if ( FirstLaunch === true) {
  
  routeName= 'Onboarding';
} else {
  
  routeName= 'Login';
  
}

return (
    <Stack.Navigator initialRouteName={routeName}>
      
        <Stack.Screen name='Onboarding' 
        component={OnboardingScreen}
        options={{header: () => null}}
        />
        <Stack.Screen name='Login' 
        component={LoginScreen}
        options={{header: () => null}}
        />
        <Stack.Screen name='Register' 
        component={SingUpScreen}
        options={({navigation}) => ({
          title:'',
          headerStyle:{
            backgroundColor:'#f9fafd',
            shadowColor:'#f9fafd',
            elevation:0
          },
          headerLeft:() => (
            <View style={{marginLeft:10}}>
              <icon.Button 
                name='long-arrow-left'
                size={25}
                backgroundColor='#f9fafd'
                color='#333'
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
          
        })}
        />
    </Stack.Navigator>
  
  
    );
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthStack;