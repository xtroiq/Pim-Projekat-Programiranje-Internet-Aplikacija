import React, {useContext,useState,useEffect, useImperativeHandle} from 'react';
import {View,Text,StyleSheet, SnapshotViewIOSComponent} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';







const HomeScreen = () => {
  
  

  const [docId, setDocId] = useState('');
  const [documentUserId, setDocumentUserId] = useState('');
  const [userid, setuserid] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
      function getData() {
      
          firestore()
          .collection('users')
          .get()
          .then(querySnapshot => {
           // console.log('Total users: ', querySnapshot.size);
        
            querySnapshot.forEach(documentSnapshot => {
              //console.log('User ID: ', documentSnapshot.id);
              setDocId(documentSnapshot.id);
            });
          });
  }
 
  


  
  getData();
  },[]);

  function getFirstName(documentSnapshot) {
    return documentSnapshot.get('firstName');
  }

  function getUserName(documentSnapshot) {
    return documentSnapshot.get('username');
  }

  

  function getUserIDCode(documentSnapshot) {
      return documentSnapshot.get('userID');
    }
    useEffect(() => {
    firestore()
      .collection('users')
      .doc(docId)
      .get()
      .then(documentSnapshot => getUserIDCode(documentSnapshot))
      .then(userid => {
        // console.log('User ID is: ', userid);
        setuserid(userid);

        if (user.uid === userid) {
          firestore()
      .collection('users')
      .doc(docId)
      .get()
      .then(documentSnapshot => getUserName(documentSnapshot))
      .then(username => {
        console.log('Users name is: ', username);
        setUsername(username);
        setDocumentUserId(userid);
      });
        } else null;


        if (user.uid === userid) {
          firestore()
      .collection('users')
      .doc(docId)
      .get()
      .then(documentSnapshot => getFirstName(documentSnapshot))
      .then(firstname => {
        console.log('First name is: ', firstname);
        setFirstName(firstname);
        
      });
        } else null;
      });
    });

    const [userData, setUserData] = React.useState({
        name: '',
      });

      const [userDate, setUserDate] = React.useState({date: ''});

const reference = firebase 
  .app()
  .database('https://collect-fire-revived-default-rtdb.europe-west1.firebasedatabase.app/')
  .ref('/UserData/Name');

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
    function getUsername () {
       
        reference.once('value').then(snapshot => {
    const data = snapshot.val();
    setUserData({
        ...userData,
        name: data
    });

    

    console.log(snapshot.val());

  })

  date.once('value').then(key => {
    const date = key.val();
    setUserDate({
        ...userDate,
        date : date
    });

    

    console.log(key.val());

  })



}

getUsername();
  },[]);


  
  


    const {logout,user} = useContext(AuthContext);

    

return (
    <View style={styles.container}>
    <Text style={styles.text} >Welcome {firstName}</Text>
    <Text style={styles.text} >Username: {username}</Text>
    <Text style={styles.text} >Notification: {userData.name}{}</Text>
    <Text style={styles.text} >Date: {userDate.date}{}</Text>
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