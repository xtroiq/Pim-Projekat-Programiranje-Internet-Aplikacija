import React , {createContext, useState}from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    return (
<AuthContext.Provider 
    value={{
    user,
    setUser,
    login: async (email,password) => {
try {
  await auth().signInWithEmailAndPassword(email,password);

} catch(e){
    console.log(e);
}

    },
    googleLogin: async () => {
        try {
        const { idToken } = await GoogleSignin.signIn();

        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        await auth().signInWithCredential(googleCredential);
        
        
    } catch(error) {
console.log(error);
    }
     },
     facebookLogin: async () => {
     try {
 // Attempt login with permissions
 const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
 

if (result.isCancelled) {
  throw 'User cancelled the login process';
}

// Once signed in, get the users AccesToken
const data = await AccessToken.getCurrentAccessToken();


if (!data) {
  throw 'Something went wrong obtaining access token';
}

// Create a Firebase credential with the AccessToken
const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// Sign-in the user with the credential
await auth().signInWithCredential(facebookCredential);


     } catch(error) {
console.log(error);
     }

     },

    
    register: async (email,password) => {
        try {
         await auth().createUserWithEmailAndPassword(email,password);
         
        } catch(e){
            console.log(e);
        }
        
    },
    logout: async () => {
        try {
          firestore()
  .collection('users')
  .doc(user?.uid)
  .update({
    isLogedIn: false,
  })
  .then(() => {
    console.log('User status updated : Logged out');
  });

  firestore()
  .collection('sessions')
  .doc(user?.uid)
  .delete()
  .then(() => {
    console.log('Session deleted!');
  });
            await auth().signOut();
     
        }catch(e){
            console.log(e);
        }
    },

  
    }}>{children}</AuthContext.Provider>
);

}