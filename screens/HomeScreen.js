import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  Animated,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  PixelRatio
} from 'react-native';

import CountDownTimer from 'react-native-countdown-timer-hooks';
import { SvgCss, SvgXml } from 'react-native-svg';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';




import { AuthContext } from '../navigation/AuthProvider';
import adjustFont from '../config/adjustFont';
import { woodIcon, fireIcon } from '../assets/icons';
import MyPointsBg from '../assets/img/back.svg';
import Flame from '../assets/img/fire_20min.svg';
import FlameOne from '../assets/img/resizenet.svg';
import {
  black,
  darkRed,
  green,
  homeScrenBackground,
  lightRed,
  orange,
  red,
  secondaryDarkRed,
  white,
  yellow,
} from '../config/colors';





const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const HomeScreen = ({navigation}) => {

  const fontSize = PixelRatio.getPixelSizeForLayoutSize(14);
  
  const [serverData, setServerData] = React.useState({});
  const [userData, setUserData] = React.useState({});
  const [sessionTime, setSessionTime] = useState(0);
  const {logout,user} = useContext(AuthContext);
  const userID = user.uid;
  const refTimer = useRef();
  const [timerEnd, setTimerEnd] = useState(false);
  const [timer, setTimer] = useState(2);
  const anim = useRef(new Animated.Value(1.5));

  let deviceID = DeviceInfo.getDeviceId() + userID;
  let phoneId = DeviceInfo.getDeviceId();
  
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    refTimer.current.resetTimer();
    console.log(deviceID);
    console.log(phoneId);
    

    
    
}, [timer]);

 
   
     
const timerCallbackFunc = (timerFlag) => {
  
  setTimerEnd(timerFlag);
//    try {
   
    
//     SoundPlayer.playSoundFile('homepage_fire_won', 'wav'); 
   
//   } catch (e) {
//     console.log(`cannot play the sound file`, e);
//   } 
getData }
     



  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));

    
    }, []);

 

    
    useEffect(() => {
      const intervalId = setInterval(() => {
      setSessionTime(sessionTime + 1);
      try {
      firestore()
      .collection('sessions')
      .doc(userID)
      .update({
      sessionTimeMinutes: sessionTime + 1
      })
      .then(() => {
      if (sessionTime <= 1440) {
      console.log('Session time set!');
      return;
      } else {
      logout();
      }
      });
      } catch (e) {
      console.log('Error', e)
      }
      }, 60000);
      
      console.log('Session time', sessionTime);
      
      return () => clearInterval(intervalId);
      }, [sessionTime, userID, logout]);
  
  
 

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

      async function updateWood (userID) {
        if (!userID) {
          throw new Error('User ID is required to update wood points.');
        }
      
        try {
          await firestore()
            .collection('users')
            .doc(userID)
            .update({
              woodPoints: firebase.firestore.FieldValue.increment(1)
            });
            
          console.log('Wood received!');
        } catch (error) {
          console.error(error);
          throw error;
        }
      }

  // Animated.loop(
  //   // runs given animations in a sequence
  //   Animated.sequence([
  //     // increase size
  //     Animated.timing(anim.current, {
  //       toValue: 1.5,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }),
  //     // decrease size
  //     Animated.timing(anim.current, {
  //       toValue: 1.2,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     }),
  //   ]),
  // ).start();


    

    

const reference = firebase 
  .app()
  .database('https://collect-fire-revived-default-rtdb.europe-west1.firebasedatabase.app/')
  .ref('/UserData');


 function getData () {
       try {
  reference.once('value').then(snapshot => {
const data = snapshot.val();
setServerData(data);



// console.log(snapshot.val());

}) } catch (e) {
  console.log('Error', e)
}



}

function getUserDeviceID(documentSnapshot) {
  return documentSnapshot.get('deviceId');
}

const checkSession = () => {
firestore()
  .collection('sessions')
  .doc(userID)
  .get()
  .then(documentSnapshot => getUserDeviceID(documentSnapshot))
  .then(deviceId => {
    console.log('Users deviceID code is: ', deviceId);
    if (deviceId == deviceID) {
      console.log('Your session is active on this device !')
    } else {
      console.log('You are trying to use multiple devices !')
    }
  });
}

// const checkSessionExist = async (userID) => {
//   let querySnapshot = await firestore().collection('sessions').where( 'deviceId', '==', deviceId ).get();
//   console.log(querySnapshot);
//   return querySnapshot.size > 0;
// }

// const checkSession = async (userID) => {
//   let exists = await checkSessionExist(userID);
//   console.log(exists);
//   if (exists === deviceId) {

//     console.log('Session is active on this device:', deviceId)
//     // Alert.alert(
//     //   "Session is active!",
//     //   "User already logged in on other device!",
//     //   [
        
//     //     { text: "Logout", onPress: () => console.log('set Logout function') }
//     //   ]
//     // );
    
    
//     return;
//   } else {
//     console.log('User is trying to use app on multiple devices!')
    
//     return;
//     }
// }

    
        async function getSessionInfo() {
          
           await firestore()
            .collection('sessions')
            .doc(userID)
            .get().then((documentSnapshot) => {
              if (documentSnapshot?.exists) {
                checkSession();
                return;
              } else {
                setSession();
                
              }
            });
          
            return;
        }
        
     



    const setSession = async () => {
      try {
      await firestore()
      .collection('sessions')
      .doc(userID)
      .set({
      userId: userID,
      time: firestore.FieldValue.serverTimestamp(),
      sessionTimeMinutes: sessionTime ,
      deviceId: deviceID,
      phoneId: phoneId,
      });
      
    
      console.log('New session added!');
      
      await firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        isLogedIn: true,
      });
      
      console.log('User is logged in sucesfully!');
      } catch (e) {
      console.log('Error', e);
      }
      }
      
      useEffect(() => {
      getSessionInfo();
      }, []);


  
  


    

    

return (

<SafeAreaView>
  <View style={styles.container}>
<ScrollView refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}   >

<View style={styles.headingWrapper}>
     <Text adjustsFontSizeToFit style={styles.headingWText} >Collect Fire</Text>
     <Text adjustsFontSizeToFit style={styles.subHeadingWText} >Collect wood when timer ends.</Text>
</View>

<View style={styles.myPointsImgWrapper}>
<MyPointsBg style={styles.centerImageStyle} />
{timerEnd ? (
            <TouchableOpacity
              style={styles.addFirePointWrapper}
              onPress={ () => {
                                              setTimerEnd(false);
                                              
                                              refTimer.current.resetTimer();
                                              
                                              //logout();
                                              updateWood(userID)
  .then(() => {
    console.log('Wood update sucesfull!');
  })
  .catch((error) => {
    console.log('Error while adding wood in database');
  });
                                              
                                              
                                          }}>
              <View style={styles.addFirePointBtn}>
                <Animated.View style={{transform: [{scale: anim.current}]}}>
                <SvgCss style={{alignSelf:'center'}} xml={woodIcon} width="20" height="20" />
                  <Text style={styles.addFirePointBtnText}>
                    <Text style={styles.addFirePointBtnText}>Click me!</Text>
                    
                  </Text>
                </Animated.View>
              </View>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
          <View style={styles.flameImgWrapper}>
          {timerEnd  ? <FlameOne style={{width: '100%', height: '100%'}} />
            : <Flame style={{width: '100%', height: '100%'}} />}
          </View>
        </View>
        <View style={styles.myPointsTimerWrapper}>
          <CountDownTimer
            ref={refTimer}
            timestamp={timer}
            containerStyle={styles.myPointsTimerWrapper}
            timerCallback={timerCallbackFunc}
            textStyle={styles.myPointsTimer}
          
          
          />
          {!timerEnd ? (
            <Text adjustsFontSizeToFit style={styles.myPointsTimerText}>
              left until you can get another <SvgXml
                xml={woodIcon}
                fill={orange}
                width="15"
                height="15"
                
                style={{marginLeft:5,paddingLeft:5}}
              />
              <Text adjustsFontSizeToFit style={styles.myPointsTimerText}> point.</Text>
            </Text>
            
          ) : (
            
            <Text adjustsFontSizeToFit style={styles.myPointsTimerText}>
              Please collect your wood by clicking <SvgXml
                xml={woodIcon}
                fill={orange}
                width="15"
                height="15"
                style={{marginLeft:5,paddingLeft:5}}
              /><Text adjustsFontSizeToFit style={styles.myPointsTimerText}> icon.</Text>
            </Text>
            
          )}          
           
           
           
           
           
           
           
           </View>
 





</ScrollView>
  </View>
  </SafeAreaView>


)
}

const styles = StyleSheet.create({ 
  container: {
    width:width,
    height:height,
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:homeScrenBackground,
    
},
headingWrapper:{
  width:width,
  height:height/5,
  backgroundColor:homeScrenBackground,
  justifyContent:'center',
  padding:10
  

    
},

headingWText:{
  
  fontSize: adjustFont(30),
  alignSelf:'center',
  color: darkRed,
  fontWeight: '700',
  marginBottom: 3,
  fontFamily: 'Roboto',
  

    
},
subHeadingWText:{
  alignSelf:'center',
  color: red,
  fontSize: adjustFont(14),
  fontFamily: 'Roboto',
  fontWeight: 'bold',
    
},
myPointsImgWrapper:{
    backgroundColor:homeScrenBackground,
    width: width,
    height: height/2,
    justifyContent: 'center',
    alignItems: 'center'

},
centerImageStyle:{
  width: width, 
  height: height,
  
},
addFirePointWrapper:{
  position: "absolute",
  top: 40,
  right: width/5
},
addFirePointBtn:{
  width: 50,
  height: 50,
  borderRadius: 50,
  backgroundColor: 'rgba(190, 218, 185, 1)',
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
},
addFirePointBtnText:{
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center',
  fontSize: adjustFont(7),
  color: secondaryDarkRed,
  fontWeight: "700",
  fontFamily: "Roboto",
},
flameImgWrapper:{
  width: '50%',
  height: '70%',
  position: "absolute",
  bottom: 25

},
myPointsTimerWrapper:{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 15
},
myPointsTimer:{
  fontSize: adjustFont(25),
  fontWeight: '700',
  color: lightRed,
  fontFamily: "Roboto"
},

myPointsTimerText:{
  color: darkRed,
  fontFamily: "Roboto",
  fontWeight:'700',
  fontSize:adjustFont(13),
}



});




export default HomeScreen;