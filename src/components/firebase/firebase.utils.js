import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkheDJLxlWbfUXP3b5VKUbizEJzC--BtY",
    authDomain: "fashion-store-react.firebaseapp.com",
    projectId: "fashion-store-react",
    storageBucket: "fashion-store-react.appspot.com",
    messagingSenderId: "1047524220278",
    appId: "1:1047524220278:web:6a40c8788ba26e119b6e57",
    measurementId: "G-XXV88T1DVQ"
  };

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;