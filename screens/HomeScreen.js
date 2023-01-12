import React, {useContext,useState,useEffect, useRef} from 'react';
import {View, TouchableOpacity, ScrollView, Platform, Animated, RefreshControl, Alert,StyleSheet,Text,Dimensions,PixelRatio } from 'react-native';
import {SvgCss, SvgXml} from 'react-native-svg';
import { Button } from 'native-base';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import SoundPlayer from 'react-native-sound-player';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as root from '../navigation/root';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import adjustFont from '../config/adjustFont';
import {woodIcon ,fireIcon } from '../assets/icons';
import MyPointsBg from '../assets/img/back.svg';
import Flame from '../assets/img/fire_20min.svg';
import FlameOne from '../assets/img/resizenet.svg';

import {orange, green, white, black, darkRed, yellow, red,homeScrenBackground,lightRed, secondaryDarkRed} from '../config/colors';










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

  
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    refTimer.current.resetTimer();
    
}, [timer]);

 const timerCallbackFunc = (timerFlag) => {
  
   setTimerEnd(timerFlag);
  /*  try {
     // play the file tone.mp3
     
     SoundPlayer.playSoundFile('homepage_fire_won', 'wav'); 
     // or play from url
   } catch (e) {
     console.log(`cannot play the sound file`, e);
   } */
  /*  setTimeout(function(){
  
     //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
     showIntAd();

   }, 5000); */
     
     
     
 };


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
      if (sessionTime <= 1440){
         
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
     
     console.log('Session time' ,sessionTime);
    
     return () => clearInterval(intervalId);
    
    
  
    }, [sessionTime]);
  
  
 

 async function getDataUser () {
    await firestore()
  .collection('users')
  .doc(userID)
  .onSnapshot(documentSnapshot => {
    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
      setUserData(documentSnapshot.data());
    }
    
 });
        

  }

  function updateWood () {
    try {
    firestore()
     .collection('users')
      .doc(userID)
     .update({
      woodPoints: userData.woodPoints + 1
     })
     .then(() => {
        console.log('Wood recived!')
       
     });
        
    } catch (e) {
      console.log(e)
    }
  }

  Animated.loop(
    // runs given animations in a sequence
    Animated.sequence([
      // increase size
      Animated.timing(anim.current, {
        toValue: 1.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      // decrease size
      Animated.timing(anim.current, {
        toValue: 1.2,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
  ).start();


    useEffect(() => {
    
    getDataUser();
    
          
        
      },[]);
    

    

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

const checkSessionExist = async (userID) => {
      let querySnapshot = await firestore().collection('sessions').where('userId', '==', user.uid).get();
      return querySnapshot.size > 0;
    }

    const checkSession = async (userID) => {
      let exists = await checkSessionExist(userID);
      if (exists) {

        console.log('Session is active! User already logged in on other device! ')
        // Alert.alert(
        //   "Session is active!",
        //   "User already logged in on other device!",
        //   [
            
        //     { text: "Logout", onPress: () => console.log('set Logout function') }
        //   ]
        // );
        console.log('Session already exists');
        
        return;
      } else {
        setSession();
        getData(); 
        return;
        }
    }
   




function setSession () {
  try {
    firestore()
    .collection('sessions')
    .doc(userID)
    .set({
      userId: userID,
      time: firestore.FieldValue.serverTimestamp(),
      sessionTimeMinutes: sessionTime ,
    })
    .then(() => {
      console.log('New session added!');
      return;
    });

    firestore()
  .collection('users')
  .doc(user.uid)
  .update({
    isLogedIn: true,
  })
  .then(() => {
    console.log('User is logged in sucesfully!');
  });
   } catch (e) {
console.log('Error', e)
}}



  useEffect(() => {
    checkSession();
    

  },[]);


  
  


    

    

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
                                              updateWood();
                                              
                                              
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
            <Text style={styles.myPointsTimerText}>
              left until you can get another <SvgXml
                xml={woodIcon}
                fill={orange}
                width="15"
                height="15"
                
                style={{marginLeft:5,paddingLeft:5}}
              />
              <Text style={styles.myPointsTimerText}> point.</Text>
            </Text>
            
          ) : (
            
            <Text style={styles.myPointsTimerText}>
              Please collect your wood by clicking <SvgXml
                xml={woodIcon}
                fill={orange}
                width="15"
                height="15"
                style={{marginLeft:5,paddingLeft:5}}
              /><Text style={styles.myPointsTimerText}> icon.</Text>
            </Text>
            
          )}          
           
           
           
           
           
           
           
           </View>
 





</ScrollView>
  </View>
  </SafeAreaView>



////////////////////////////////////////


  // <View style={[myPointsContainer, {backgroundColor:'rgba(190, 218, 185, 1)' }]}>
  // {/* <ScrollView refreshControl={
  //     <RefreshControl
  //       refreshing={refreshing}
  //       onRefresh={onRefresh}
  //     />
  //   }> */}
  //   <View style={[headingWrapper,{backgroundColor:'rgba(190, 218, 185, 1)'}]}>
  //     <Text style={[heading,{marginTop:10}]}>Collect Fire</Text>
          
  //         <Text style={subheading}>We are happy to see you.</Text>
  //         <Text style={subheading}>Collect wood when timer ends.</Text>
  //       </View>
       
  //       <View style={myPointsImgWrapper}>
  //         <MyPointsBg style={{width: '100%', height: '100%'}} />
        //   {timerEnd ? (
        //     <TouchableOpacity
        //       style={addFirePointWrapper}
        //       onPress={ () => {
        //                                       setTimerEnd(false);
                                              
        //                                       refTimer.current.resetTimer();
                                              
                                              
        //                                       //updateWood();
                                              
                                              
        //                                   }}>
        //       <View style={addFirePointBtn}>
        //         <Animated.View style={{transform: [{scale: anim.current}]}}>
        //         <SvgCss style={{alignSelf:'center'}} xml={woodIcon} width="20" height="20" />
        //           <Text style={addFirePointBtnText}>
        //             <Text style={addFirePointBtnText}>Click me!</Text>
                    
        //           </Text>
        //         </Animated.View>
        //       </View>
        //     </TouchableOpacity>
        //   ) : (
        //     <View></View>
        //   )}
        //   <View style={flameImgWrapper}>
        //   {timerEnd  ? <FlameOne style={{width: '100%', height: '100%'}} />
        //     : <Flame style={{width: '100%', height: '100%'}} />}
        //   </View>
        // </View>
        // <View style={myPointsTimerWrapper}>
        //   <CountDownTimer
        //     ref={refTimer}
        //     timestamp={timer}
        //     containerStyle={myPointsTimerWrapper}
        //     timerCallback={timerCallbackFunc}
        //     textStyle={myPointsTimer}
          
          
        //   />
        //   {!timerEnd ? (
        //     <Text style={myPointsTimerText}>
        //       left until you can get another <SvgXml
        //         xml={woodIcon}
        //         fill={orange}
        //         width="15"
        //         height="15"
                
        //         style={{marginLeft:5,paddingLeft:5}}
        //       />
        //       <Text style={myPointsTimerText}> point.</Text>
        //     </Text>
            
        //   ) : (
            
        //     <Text style={myPointsTimerText}>
        //       Please collect your wood by clicking <SvgXml
        //         xml={woodIcon}
        //         fill={orange}
        //         width="15"
        //         height="15"
        //         style={{marginLeft:5,paddingLeft:5}}
        //       /><Text style={myPointsTimerText}> icon.</Text>
        //     </Text>
            
        //   )}
  //       </View>
          
  //         <View style={buttonContainer}>
  //           <Button
  //             onPress={() => console.log('Watch ad')}
  //             full
  //             style={getFreeBtn}>
  //             <SvgXml
  //               xml={woodIcon}
  //               fill={green}
  //               width="28"
  //               height="28"
  //               color='black'
  //               style={{position: 'absolute', left: -30 , top:-7}}
  //             />
  //             <Text style={textButton}>{'  '}watch ad & get free wood</Text>
  //           </Button>
  //         </View>
       
     
      
   
      
    
  //   </View>
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
  width: '100%', 
  height: '100%',
  
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
  fontSize: 5,
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
  fontSize: 34,
  fontWeight: '700',
  color: lightRed,
  fontFamily: "Roboto"
},

myPointsTimerText:{
  color: darkRed,
  fontFamily: "Roboto",
  fontWeight:'700',
  fontSize:15,
}



});




export default HomeScreen;