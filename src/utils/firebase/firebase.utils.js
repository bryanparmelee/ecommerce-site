import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
 } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDS7HdBt56Oaw_fpuizrRewlPb4Y2lpsgw",
    authDomain: "ecommerce-site-8493b.firebaseapp.com",
    projectId: "ecommerce-site-8493b",
    storageBucket: "ecommerce-site-8493b.appspot.com",
    messagingSenderId: "30367223169",
    appId: "1:30367223169:web:cc3014812a9638308cec80"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error creating user', error);
        }
    }

    return userDocRef;
}