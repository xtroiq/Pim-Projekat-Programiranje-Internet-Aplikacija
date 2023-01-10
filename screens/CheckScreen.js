import React , {useContext,useState,useEffect}from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';


const CheckScreen = ({navigation}) => {

    const {user, setUser} = useContext(AuthContext);

    const userId = user.uid;


    useEffect(() => {
        verifiedUser() ;
        
             
        },[]);
    
    function getUserIDCode(documentSnapshot) {
        return documentSnapshot.get('userID');
       }

    function verifiedUser  ()  {
        
  
    firestore()
    .collection('users')
    .doc(userId)
    .get()
    .then(documentSnapshot => getUserIDCode(documentSnapshot))
    .then(userid => {
      //console.log('Users name is: ', userId);
      if (userid === userId  ) {
        
        
       navigation.navigate('HomeScreen');
    } else 
    
    navigation.navigate('WelcomeScreen');
    
    
    });
    
    };
    
    
    
    

    
        
     return null;
     
     
    
        
    };
    
    export default CheckScreen;