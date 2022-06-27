import React ,{useState,useContext}from 'react';
import { View, StyleSheet, Button,Text ,Image,TouchableOpacity,Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {SvgCss, SvgXml} from 'react-native-svg';
import { AuthContext } from '../navigation/AuthProvider';


const LoginScreen = ({navigation}) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {login,googleLogin,facebookLogin} = useContext(AuthContext);
  return (
    <View style={styles.container}>
    <View style={styles.container}>
   <Text style={styles.text}>PIM univerzitet tutorijal za PIA - Login Screen</Text>
   </View>
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
     onPress={() => login(email,password)}
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
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f9fafd',
        padding:20
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
      
    }
  });

export default LoginScreen;