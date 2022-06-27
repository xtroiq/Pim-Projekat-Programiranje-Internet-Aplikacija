import React ,{useState,useContext}from 'react';
import { View, StyleSheet, Button,Text ,Image,TouchableOpacity,Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';


const SingUpScreen = ({navigation}) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setconfirmPassword] = useState();

const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Register</Text>
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
    <FormInput 
   onChangeText={(userConfirmPassword) => setconfirmPassword(userConfirmPassword)}
   labelValue={confirmPassword}
     placeHolderText='Confirm Password'
     iconType='lock'
     autoCapitalize='none'
     autoCorrect={false}
     secureTextEntry={true}

   />

   <FormButton 
     buttonTitle='Register'
     onPress={() => register(email,password)}
   />
   <View style={styles.textPrivate}>
       <Text style={styles.color_textPrivate}>By registering you confirm that you accept our</Text>
       <TouchableOpacity >
       <Text style={[styles.color_textPrivate,{color:'#e88832'}]} >Terms and agreements</Text>
       </TouchableOpacity>
       <Text style={styles.color_textPrivate}>  and</Text>
       <TouchableOpacity style={[styles.color_textPrivate,{color:'#e88832'}]}>
       <Text style={[styles.color_textPrivate,{color:'#e88832'}]}>  Privacy Policy</Text>
       </TouchableOpacity>
   </View>
  {Platform.OS === 'android' ? (<View>
<SocialButton 
buttonTitle='Sign up with facebook'
btnType='facebook'
color='#4867aa'
  backgroundColor='#e6eaf4'
  onPress={() => {}}
/>
<SocialButton 
buttonTitle='Sign up with Google'
btnType='google'
color='#de4d41'
  backgroundColor='#f5e7ea'
  onPress={() => {}}
/>
</View>) : null}
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
    text: {
      fontSize:28,
      marginBottom:10,
      color:'#051d5f',
    },
    navButton: {
      marginTop:15
    },
    navButtonText:{
      fontSize:18,
      fontWeight:'500',
      color:'#2e64e6',
      
    },
    textPrivate:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginVertical:35,
        justifyContent:'center',
    },
    color_textPrivate: {
        fontSize:13,
        fontWeight:'400',
        color:'grey'
    },
    text: {
        fontSize:28,
        marginBottom:10,
        color:'#051d5f',
      },
  });

export default SingUpScreen;