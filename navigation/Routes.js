import React , {useContext,useState,useEffect}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import AppStack, { RewardsScreenStack } from './AppStack';
import AuthStack from './Authstack';
import { navigationRef } from './root';



const Routes = () => {


const {user, setUser} = useContext(AuthContext);
const [initializing, setInitializing] = useState(true);

const onAuthStateChanged = (user,userData) => {
    setUser(user);
    
    if(initializing) setInitializing(false);
}



useEffect(()=> {
const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
return subscriber;


},[]);

 if (initializing) return null;

 return (
        <NavigationContainer ref={navigationRef}>


        {user  ? <RewardsScreenStack />  : <AuthStack /> }
        
        </NavigationContainer>
    );
 
 

    
};

export default Routes;