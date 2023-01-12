import {StyleSheet, Platform, StatusBar} from 'react-native';
import {white, darkRed, orange, red, black} from '../config/colors';


const styles = StyleSheet.create({
  header: {
    backgroundColor: darkRed,
    width: '100%',
    height: 60,
    /* marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight, */
    
  },
  authHeader: {
    height: 150,
    width: '100%',
  },
  userInfoCol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  userAvatar: {
    width: 35,
    height: 35,
    borderRadius: 15,
    alignSelf:'center'
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 14,
    color: white,
    fontWeight: '700',
    fontFamily: 'Roboto',
    marginLeft:3,
  },
  userRank: {
    fontSize: 12,
    color: orange,
    fontFamily: 'Roboto',
  },
  iconsCol: {
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '600',
    color: white,
    fontFamily: 'Roboto',
  },
  largeText: {
    marginLeft: 5,
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  largeTextOne: {
    marginLeft: 20,
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Roboto',
    alignSelf:'center',

  },
  largeTextTwo: {
    
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    alignSelf:'center',
justifyContent:'center',
alignItems:'center',

  },
  largeTextThree: {
    
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    alignSelf:'center',
justifyContent:'center',
alignItems:'center',
color:red,

  },
  largeTextFour: {
    
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    alignSelf:'center',
justifyContent:'center',
alignItems:'center',
color:black,

  },
  iconWrapperOne: {
    flexDirection:'column',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
  },
});

export const {
  header,
  authHeader,
  iconsCol,
  iconText,
  iconWrapper,
  iconWrapperOne,
  userAvatar,
  userInfo,
  userInfoCol,
  userName,
  userRank,
  largeText,
  largeTextOne,
  largeTextTwo,
  largeTextThree,
  largeTextFour,
} = styles;
