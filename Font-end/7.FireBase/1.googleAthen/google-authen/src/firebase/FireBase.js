// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-CARLgaLcN0hJsdVHIS3J2t98sSvEw4U",
  authDomain: "web-shop1-10036.firebaseapp.com",
  projectId: "web-shop1-10036",
  storageBucket: "web-shop1-10036.appspot.com",
  messagingSenderId: "746990201636",
  appId: "1:746990201636:web:3591ac9521a6552c47a1b1",
  measurementId: "G-RSCXHPJ2VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result) // hiển thị thông tin của người dùng
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        // lưu thông tin trong local storage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

    }).catch((error) => {
        console.log(error);
    })
};


export const signOutUser = () => {
    signOut(auth).then(() => {
        localStorage.removeItem("name")
    }).catch((err) => {
        console.log(err)
    })
}

