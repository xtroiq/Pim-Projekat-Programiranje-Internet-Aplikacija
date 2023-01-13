import React , {useContext,useState,useEffect,useRef}from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { View} from 'react-native';

const CheckScreen = ({navigation}) => {

    const {user, setUser} = useContext(AuthContext);

    const userId = user.uid;
    const unsubscribe = useRef(null);

    useEffect(() => {
        unsubscribe.current = firestore()
          .collection('users')
          .doc(userId)
          .onSnapshot(documentSnapshot => {
            if (documentSnapshot.exists) {
              navigation.navigate('HomeScreen');
            } else {
                navigation.navigate('WelcomeScreen');
            }
          });
    
        return () => {
          if (unsubscribe.current) {
            unsubscribe.current();
          }
        };
      }, []);


    
    // useEffect(() => {
      //   async function getDataUser() {
      //     try {
      //       const snapshot = await firestore()
      //         .collection('users')
      //         .doc(userID)
      //         .onSnapshot((documentSnapshot) => {
      //           if (documentSnapshot?.exists) {
      //             console.log('Data succesfully obtained: ', documentSnapshot.data());
      //             setUserData(documentSnapshot.data());
      //           }
      //         });
      //     } catch (error) {
      //       console.error('Error getting user data: ', error);
      //     }
      //   }
        
      // }, [userID]);
    
    
    

    
        
     return (
        <View style={{flex: 1}}>

        </View>
     )
     
     
    
        
    };
    
    export default CheckScreen;