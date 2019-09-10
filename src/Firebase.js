import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCCxhespkGR2wo8CqjqImwxSfeqyiw0M24",
    authDomain: "bday-auth.firebaseapp.com",
    databaseURL: "https://bday-auth.firebaseio.com",
    projectId: "bday-auth",
    storageBucket: "",
    messagingSenderId: "1064743764371",
    appId: "1:1064743764371:web:b8c13812b03b9db9afe866"
};

const fire =  firebase.initializeApp(config);
export default fire;