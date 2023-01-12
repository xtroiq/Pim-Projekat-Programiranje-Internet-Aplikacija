import React, {useEffect} from 'react';
import Providers from './navigation';
import {SafeAreaView }from 'react-native-safe-area-context';
import {StatusBar, BackHandler,Alert,Linking} from 'react-native';
import { NativeBaseProvider } from 'native-base';


import {darkRed, white} from './config/colors';

const App = () => {

   //backgroundColor={'transparent'}
  
  return (
    <NativeBaseProvider>
    
      <StatusBar backgroundColor={darkRed}  translucent={true}  hidden={true} barStyle='dark-content' />
       <Providers />
       
    </NativeBaseProvider>
 );
}

export default App;