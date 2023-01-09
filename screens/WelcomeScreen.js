import React ,{useState,useContext,useEffect}from 'react';
import { View, StyleSheet, Button,Text ,Image,TouchableOpacity,Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

 







const WelcomeScreen = ({navigation}) => {

    const [docId, setDocId] = useState('');
    const [userid, setuserid] = useState('');

    useEffect(() => {
        function getData() {
        
            firestore()
            .collection('users')
            .get()
            .then(querySnapshot => {
              console.log('Total users: ', querySnapshot.size);
          
              querySnapshot.forEach(documentSnapshot => {
                //console.log('User ID: ', documentSnapshot.id);
                setDocId(documentSnapshot.id);
              });
            });
    }
   
    


    
    getData();
    },[]);

    function getUserIDCode(documentSnapshot) {
        return documentSnapshot.get('userID');
      }
      
      firestore()
        .collection('users')
        .doc(docId)
        .get()
        .then(documentSnapshot => getUserIDCode(documentSnapshot))
        .then(userid => {
          console.log('Users name is: ', userid);
          setuserid(userid);
          if (user.uid === userid ) {
            navigation.navigate('HomeScreen');
        } else null;
        });

        


    const {logout, user} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
   
const userId = user.uid;
   
    
    
    const  updateData = () => {

       let data = {
            userId : userId,
            username: username,
            firstName: firstName,
            lastName: lastName,
         };

         console.log(data);

         firestore()
  .collection('users')
  .add({
    firstName: data.firstName,
    lastName: data.lastName,
    userID: data.userId,
    username: data.username
  })
  .then(() => {
    console.log('User added!');
    navigation.navigate('HomeScreen');
  });
    }
    
      return (
        <View style={styles.container}>
        <Text style={styles.text}>User id: {user.uid}</Text>
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
         onPress={() => updateData(userId,username,firstName,lastName,)}
       />
      
      
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