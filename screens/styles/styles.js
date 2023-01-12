import { Dimensions, StyleSheet } from "react-native";
import { white, darkRed, red, lightRed, secondaryDarkRed, yellow, orange, black, green } from "../../config/colors";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  myPointsContainer: {
    flex: 1,
  },
  myPointsImgWrapper:{
    position: 'relative',
    width: width,
    height: height/2.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  myPointsButtonsWrapper:{
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width: width,
    marginBottom: height/15,
    justifyContent:'center',
    alignContent:'center',
    
  },
  speedUpBtn:{
    position: 'relative',
    width:'100%',
    height: 45,
    backgroundColor: lightRed,
    borderRadius: 5,
  },
  getFreeBtn:{
    position: 'absolute',
    width:width/1.2,
    height: width/10,
    backgroundColor: secondaryDarkRed,
    borderRadius: 5,
    marginTop:60,
  },
  textButton:{
    fontSize: 16,
    textAlign: 'center',
    color: white,
    textTransform: 'uppercase',
    fontWeight: '700',
    fontFamily: "Roboto"
  },
  termsAndConditionsWrapper:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  
  termsAndConditionsLink:{
    color: red,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: red,
    fontFamily: "Roboto",
    alignSelf:'center',
    alignItems:'center',
  },
  termsAndConditionsLinkOne:{
    color: red,
    fontWeight: '700',
    textDecorationStyle: "solid",
    textDecorationColor: red,
    fontFamily: "Roboto",
    alignItems:'center',
    alignSelf:'center',
  },
  addFirePointWrapper:{
    position: "absolute",
    top: 40,
    right: 100
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
    width: 200,
    height: 200,
    position: "absolute",
    bottom: 25
  }
});

export const {
  myPointsContainer,
  myPointsImgWrapper,
  myPointsTimerWrapper,
  myPointsTimer,
  myPointsTimerText,
  myPointsButtonsWrapper,
  buttonContainer,
  speedUpBtn,
  getFreeBtn,
  textButton,
  termsAndConditionsWrapper,
  termsAndConditionsLink,
  termsAndConditionsLinkOne,
  addFirePointWrapper,
  addFirePointBtn,
  addFirePointBtnText,
  flameImgWrapper
} = styles;
