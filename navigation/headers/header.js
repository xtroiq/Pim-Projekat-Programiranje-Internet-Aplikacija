import React, {useEffect, useState, useRef, useContext} from 'react';
import {Image, TouchableOpacity, Animated,Text, View} from 'react-native';
import { firebase } from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

import {
  header,
  iconsCol,
  iconText,
  iconWrapper,
  largeText,
  userAvatar,
  userInfoCol,
  userName,
} from './styles';
import {Col, Grid} from 'react-native-easy-grid';
import { AuthContext } from '../AuthProvider';
import {SvgCss, SvgXml} from 'react-native-svg';
import {
  bellIcon,
  fireIcon,
  medalIcon,
  woodIcon,
  logoutIcon,
  bellIconNotification
} from '../../assets/icons';

import * as root from '../root';

import Modal from 'react-native-modal';

import { DefaultModalContentHeader } from '../../modals/DefaultModalContentHeader';

const Header = ({navigation}) => {
   const [statsShown, setStatsShown] = useState(false);
   const [userData, setUserData] = React.useState({});
   const anim = useRef(new Animated.Value(1.2));
   const {logout, user} = useContext(AuthContext);
   const userID = user.uid;
   const woodPoints = userData.woodPoint ;


   async function getDataUser () {
      
   await firestore()
  .collection('users')
  .doc(userID)
  .onSnapshot(documentSnapshot => {
    //console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
  //console.log('User data: ', documentSnapshot.data());
      setUserData(documentSnapshot.data());
      
    }
  });

  
        

  }

  
   
  useEffect(() => {
    
    getDataUser();
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);



  const username = userData.username
    ? [userData.username].join(' ')
    : '';

  const USERNAME_CHAR_LIMIT = 10;

  const displayUsername =
    username.length > USERNAME_CHAR_LIMIT
      ? `${username.substring(0, USERNAME_CHAR_LIMIT)}...`
      : username;

  const { signOut } = React.useContext(AuthContext);

  return (
    
    <View style={header}>
    {/* <StatusBar hidden={true} /> */}
      <Grid >
        <View style={userInfoCol} size={40}>
          {
            userData !== 'HomeScreen' ? (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('WelcomeScreen')}>
                  {userData ? (
                    <Image
                    
                    style={userAvatar}
                    source={require('../../assets/img/user-img.png')}
                  />
                    
                  ) : (

                    
                    <Image
                    
                    style={userAvatar}
                    source={require('../../assets/img/user-img.png')}
                  />
                  )}
                </TouchableOpacity>
                <View style={userInfoCol}>
                  <Text style={userName}>{displayUsername}</Text>
                </View>
              </>
            ) : (
              <TouchableOpacity onPress={onLogout} style={{flex:1, alignItems:"center" , flexDirection:'column', marginRight:'50%'}}>
                <View style={{padding:5, alignItems:'center'}}>
                <SvgXml xml={logoutIcon} width="25" height="25" />
                </View>
              </TouchableOpacity>
            )
            // <TouchableOpacity onPress={() => {signOut()}}>
            //   <SvgXml xml={logoutIcon} width="33" height="33" />
            // </TouchableOpacity>
          }
        </View>
        <Col style={iconsCol} size={60} >
          <Grid>
            <Col size={1}>
              <TouchableOpacity onPress={() => setStatsShown(true)}>
                <View style={iconWrapper}>
                  <SvgCss xml={woodIcon} width="20" height="20" />
                  <Text style={iconText}>
                    {userData
                      ? userData.woodPoints >= 1000
                        ? Math.floor(userData.woodPoints / 1000) + 'k'
                        : userData.woodPoints
                      : null}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
            <Col size={1} style={{marginLeft: 5}} >
              <TouchableOpacity onPress={() => setStatsShown(true)}>
                <View style={iconWrapper}>
                  <SvgCss xml={fireIcon} width="20" height="20" />
                  <Text style={iconText}>
                    {userData
                      ? userData.firePoints > 1000
                        ? Math.floor(userData.firePoints / 1000) + 'k'
                        : userData.firePoints
                      : null}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
            <Col size={1} >
              <View style={iconWrapper}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('WelcomeScreen')}>
                  <SvgCss xml={medalIcon} width="20" height="20" />
                </TouchableOpacity>
              </View>
            </Col>
         
            

            

              {/*  {connections?.data?.item?.status != 'pending'  ? 
    
                 ( <Col size={1}>
                  <View style={[iconWrapper, {marginBottom:2,alignContent:'center',alignItems:'center'}]}>
              <TouchableOpacity
                  onPress={() => props.navigation.navigate('Notifications')}>
                  <SvgCss xml={bellIconNotification} width="20" height="20" />
                </TouchableOpacity> 
                </View>
                </Col>)
                         : (
                          <Col size={1}>
                  <View style={[iconWrapper, {marginBottom:2,alignContent:'center',alignItems:'center'}]}>
              <TouchableOpacity
                  onPress={() => props.navigation.navigate('Notifications')}>
                  <SvgCss xml={bellIcon} width="20" height="20" />
                </TouchableOpacity> 
                </View>
                </Col>
                        ) } */}

              {/*  {notificationIcon ? null : <Col size={1}>
                  <View style={[iconWrapper, {marginBottom:2,alignContent:'center',alignItems:'center'}]}>
              <TouchableOpacity
                  onPress={() => props.navigation.navigate('Notifications')}>
                  <SvgCss xml={bellIcon} width="20" height="20" />
                </TouchableOpacity> 
                </View>
                </Col>} */}
               
                  <Col >
                  <View style={[iconWrapper, {marginLeft:5,marginRight:10}]}  >
              <TouchableOpacity
                  onPress={() => root.navigate('WelcomeScreen')}>
                  <SvgCss xml={bellIconNotification} width="20" height="20" />
                </TouchableOpacity> 
                </View>
                </Col>
           
          </Grid>
        </Col>
      
      </Grid>
     
      <Modal
        isVisible={statsShown}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutDown"
        animationInTiming={600}
        animationOutTiming={600}
        useNativeDriver
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <DefaultModalContentHeader
          onPress={() => setStatsShown(false)}
          title="YOUR STASH">
          
          <View>
            <View style={[iconWrapper, {marginBottom: 30}]}>
              <SvgCss xml={woodIcon} width="50" height="50" />
              <Text style={largeText}>
              {userData.woodPoints}
              </Text>
            </View>
            <View style={iconWrapper}>
              <SvgCss xml={fireIcon} width="50" height="50" />
              <Text style={largeText}>
                {userData.firePoints}
              </Text>
            </View>
          </View>
         
        </DefaultModalContentHeader>
      </Modal>
    </View>
    
  );
};

export default Header;
