import React, {useContext,useState,useEffect, useImperativeHandle} from 'react';
import {View,Text,StyleSheet, SnapshotViewIOSComponent} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';







const HomeScreen = ({navigation}) => {
  
  const [serverData, setServerData] = React.useState({});
  const [userData, setUserData] = React.useState({});
  
  const {logout,user} = useContext(AuthContext);

  const userID = user.uid;




  function getDataUser () {
    firestore()
  .collection('users')
  .doc(userID)
  .get()
  .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
      setUserData(documentSnapshot.data());
    }
  });
        

  }


    useEffect(() => {
    
    getDataUser();
        
          
        
      },[]);
    

    

const reference = firebase 
  .app()
  .database('https://collect-fire-revived-default-rtdb.europe-west1.firebasedatabase.app/')
  .ref('/UserData');

const date = firebase 
  .app()
  .database('https://collect-fire-revived-default-rtdb.europe-west1.firebasedatabase.app/')
  .ref('/Date');

  const serverDate = firebase 
  .app()
  .database('https://collect-fire-revived-default-rtdb.europe-west1.firebasedatabase.app/')
  .getServerTime(date);
 
 // console.log(serverDate);



  useEffect(() => {
    function getData () {
       
        reference.once('value').then(snapshot => {
    const data = snapshot.val();
    setServerData(data);

    

    console.log(snapshot.val());

  })



}

getData();
  },[]);


  
  


    

    

return (
    <View style={styles.container}>
    <Text style={styles.text} >Welcome {userData.firstName}</Text>
    <Text style={styles.text} >Username: {userData.username}</Text>
    <Text style={styles.text} >Notification: {serverData.Notification} </Text>
    <Text style={styles.text} >Date: {serverData.Date} </Text>
    <FormButton buttonTitle='Logout' onPress={() => logout()} />
    </View>
)


}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f9fafd',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    text:{
        fontSize:20,
        color:'#333333'
    }
})

export default HomeScreen;