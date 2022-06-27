import React from 'react';
import { View, StyleSheet ,Image, Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



/* const Skip = ({...props}) => (
    <Button title='Skip' 
        color='#BEBEBE'
        {...props}
    />)

const Next = ({...props}) => (
    <Button title='Next' 
        style={{color:'translucent'}}
        disabled={false}
        {...props}
    />) */



const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
   
    onSkip={()=> navigation.replace('Login')}
    onDone={()=> navigation.navigate('Login')}
    pages={[
      {
        backgroundColor: '#BEBEBE',
        image: <Image style={{width:'100%', height:'50%'}} source={require('../assets/icon.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: 'green',
        image: <Image source={require('../assets/icon.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: 'red',
        image: <Image source={require('../assets/icon.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    ]}
  />
    /* 
    <View style={styles.container}>
    <Text>OnboardingScreen</Text>
<Button title='Click Here' onPress={() => navigation.navigate('Login')} />
    </View> */
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }
});

export default OnboardingScreen;