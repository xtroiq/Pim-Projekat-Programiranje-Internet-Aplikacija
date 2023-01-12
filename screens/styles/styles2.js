import {StyleSheet, Dimensions} from 'react-native';
import {white, darkRed, orange, red, black, green} from '../../config/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        backgroundColor: darkRed,
        width: '100%',
        height: 60,
    
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
        width: 40,
        height: 40,
    },
    userInfo: {
        marginLeft: 10,
    },
    userName: {
        fontSize: 14,
        color: white,
        fontWeight: '700',
        fontFamily: 'Roboto',
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
    headingWrapper: {
        width: '100%',
        height: '20%',
        position: 'relative',
        justifyContent: 'center',
        alignItems:'center',
        alignContent:'center',
        
        
    },
    heading: {
        color: darkRed,
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 3,
        fontFamily: 'Roboto',
        marginTop:10,
        overflow:'hidden'
    },
    headingOne: {
        color: darkRed,
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 3,
        fontFamily: 'Roboto',
        
    },
    subheading: {
        color: red,
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom:10
    },
    termsText: {
        color: black,
        fontSize: 15,
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    termsTextHeader: {
        color: red,
        fontSize: 20,
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
});

export const {
    header,
    userInfoCol,
    userAvatar,
    userInfo,
    userName,
    userRank,
    iconsCol,
    iconWrapper,
    iconText,
    headingWrapper,
    heading,
    headingOne,
    subheading,
    termsText,
    termsTextHeader,
} = styles;
