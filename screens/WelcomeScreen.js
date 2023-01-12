import React ,{useState,useContext,useEffect}from 'react';
import { View, StyleSheet, Button,Text ,Image,TouchableOpacity,Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import HomeScreen from './HomeScreen';


 const WelcomeScreen = ({navigation}) => {


    const [initializing, setInitializing] = useState(true);
    const {logout, user} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [AlertNoticeShown, setAlertNoticeShown] = useState(true);
    const userId = user.uid;
    const [verUser, setVerUser] = useState(false);
    const [usersID, setIdUsers] = React.useState('');
    const [name, setName] = React.useState('');

    

    const checkUsernameExists = async (username) => {
      let querySnapshot = await firestore().collection('users').where('username', '==', username).get();
      return querySnapshot.size > 0;
    }
    
    const checkUsernames = async (username) => {
      let exists = await checkUsernameExists(username);
      if (exists) {
        console.log('Username already exists');
      } else {
        updateData();
        console.log('Username is available');

      }
    }



   
    

  


const  updateData = () => {

      if (username.length == 0) {
        console.log('No username inside input');
        return;
      }

      if (firstName.length == 0) {
        console.log('No firstname inside input');
        return;
      }

      if (lastName.length == 0) {
        console.log('No lastname inside input');
        return;
      }

       let data = {
            userId : userId,
            username: username,
            firstName: firstName,
            lastName: lastName,
         };

         console.log(data);

         firestore()
  .collection('users')
  .doc(userId)
  .set({
    firstName: data.firstName,
    lastName: data.lastName,
    userID: data.userId,
    username: data.username,
    country: '',
    city: '',
    address:'',
    phoneNumber:'',
    zipCode:0,
    isLogedIn:true,
    firePoints:0,
    woodPoints:20,


  })
  .then(() => {
    console.log('User added!');
    navigation.navigate('HomeScreen');
  });
    }

    
       
      return (

        
        <View style={styles.container}>
        <Text style={styles.text}>Hi there</Text>
        <Text style={styles.text}>Please fill to continue</Text>

        

        <FormInput 
       labelValue={username}
       onChangeText={(username) => setUsername(username)}
         placeHolderText='Username'
         iconType='user'
         keyboardType='default'
         autoCapitalize='none'
         autoCorrect={false}
    
       />
       { AlertNoticeShown ? null : 
            
            <Text style={styles.errorMsg}>Please enter username</Text>
       }
       <FormInput 
       labelValue={firstName}
       onChangeText={(firstName) => setFirstName(firstName)}
         placeHolderText='First name'
         iconType='user'
         keyboardType='default'
         autoCapitalize='none'
         autoCorrect={false}
    
       />
       <FormInput 
       onChangeText={(lastName) => setLastName(lastName)}
       labelValue={lastName}
         placeHolderText='Last Name'
         iconType='user'
         autoCapitalize='none'
         autoCorrect={false}
         
    
       />
       
    
       <FormButton 
         buttonTitle='Update your data'
         onPress={() => checkUsernames(username) /* checkUsername(userId,username,firstName,lastName) */}
       />
      
      
      <FormButton buttonTitle='Logout' onPress={() => logout()} />
      <FormButton buttonTitle='Navigate' onPress={() => navigation.navigate('HomeScreen')} />
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
    
    export default WelcomeScreen;