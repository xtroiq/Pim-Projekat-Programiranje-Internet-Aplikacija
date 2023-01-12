import React ,{useState,useContext}from 'react';
import { View, Text, StyleSheet, Button ,Image,TouchableOpacity,Platform,StatusBar,TextInput} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {SvgCss, SvgXml} from 'react-native-svg';
import { AuthContext } from '../navigation/AuthProvider';

import Header from '../assets/img/header_logo.svg';

import {green} from '../config/colors';
import center from 'native-base/src/theme/components/center';



const LoginScreen = ({navigation}) => {





const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {login,googleLogin,facebookLogin} = useContext(AuthContext);




const [userData, setUserData] = React.useState({
  
  check_textInputChange: false,
  secureTextEntry: true,
  isValidUser: true,
  isValidPassword: true,
  rememberMe: false,
});


const updateSecureTextEntry = () => {
  setUserData({
      ...userData,
      secureTextEntry: !userData.secureTextEntry
  });
}

//checking username input for error message
const handleValidUser = (val) => {
  if( val.trim().length >= 4 ) {
      setUserData({
          ...userData,
          isValidUser: true
      });
  } else {
      setUserData({
          ...userData,
          isValidUser: false
      });
  }
}



 

  //checking username input for error message
  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setUserData({
            ...userData,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setUserData({
            ...userData,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}
  
//checking if password is <8 to cancel error message
const handlePasswordChange = (val) => {
  const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ ;
        if( !regularExpression.test(val)) {
          setUserData({
            ...userData,
            password: val,
            isValidPassword: false,
            
        });
         } else {
      setUserData({
        ...userData,
        password: val,
        isValidPassword: true,
        
    });
    }
}

//LoginLocal with logic.
const logInLocal = (email,password) => {
  const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ ;
  const regularExpressionMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ;

//   if (email.length < 5) {
//     console.log('Bad email')
//     return;

//   } 

//   if (email.length == 0) {
//     console.log('Mail cannot be empty!')
//     return;

//   }

// if ( password.length == 0) {
//   console.log('Password cannot be empty!');
//   return;
// }


// if (!regularExpressionMail.test(email)) {
//   console.log('Email is not good format!')
//   return;

// }

// if (!regularExpression.test(password)) {
//   console.log('Password must contain at least one number and one capital letter.')
//   return;

// }
     

        let data = {
          email: email,
          password: password,
          
       };
       setEmail(data.email);
       setPassword(data.password);


       login(email,password);
          };


















return (

  
    <View style={styles.container}>
    <View style={styles.authHeader}>
        <Header style={{width: '100%', height: '100%' }} preserveAspectRatio="xMinYMid slice"/>
      </View>
      <StatusBar  hidden={true}/>
      
      <View style={styles.containerInput}>
    <FormInput 
   labelValue={email}
   onChangeText={(userEmail) => setEmail(userEmail)}
     placeHolderText='Email'
     iconType='user'
     keyboardType='email-address'
     autoCapitalize='none'
     autoCorrect={false}

   />
   <FormInput 
   onChangeText={(userPassword) => setPassword(userPassword)}
   labelValue={password}
     placeHolderText='Password'
     iconType='lock'
     autoCapitalize='none'
     autoCorrect={false}
     secureTextEntry={true}

   />

   <FormButton 
     buttonTitle='Login'
     onPress={() => logInLocal(email,password)}
     
   />
   <TouchableOpacity style={styles.fogotButton}>
     <Text style={styles.navButtonText}>Forget Password?</Text>
   </TouchableOpacity>
{Platform.OS === 'android' ? (<View><SocialButton 
buttonTitle='Sign in with facebook'
btnType='facebook'
color='#4867aa'
  backgroundColor='#e6eaf4'
  onPress={() => {facebookLogin()}}
/>
<SocialButton 
buttonTitle='Sign in with Google'
btnType='google'
color='#de4d41'
  backgroundColor='#f5e7ea'
  onPress={() => {googleLogin()}}
/></View>) : null}
   <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.fogotButton}>
     <Text style={styles.navButtonText}>Dont Have Account create here?</Text>
   </TouchableOpacity>
    </View>
    </View>



//////////////////////////////////////////////



      

    
  );
}




const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:green,
        
        
    },
    containerInput: {
      flex:1,
      backgroundColor:green,
      marginTop:'20%',
      padding:'2%'
      
      
  },
    logo:{
      height:150,
      width:150,
      resizeMode:'cover',
    },
    text: {
      fontSize:28,
      marginBottom:10,
      color:'#051d5f',
    },
    navButton: {
      marginTop:15
    },
    fogotButton:{
      marginVertical:25,
    },
    navButtonText:{
      fontSize:18,
      fontWeight:'500',
      color:'#2e64e6',
      alignContent:'center',
      alignItems:'center',
      alignSelf:'center'
      
    },
    authHeader: {
      height: 150,
      width: '100%',
    },
  });

export default LoginScreen;