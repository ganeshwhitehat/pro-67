import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBv7KDaCorIxS_YXrAsMsoJxaw4o-5STyw',
  authDomain: 'wireless-buzzer-app-4457f.firebaseapp.com',
  databaseURL: 'https://wireless-buzzer-app-4457f-default-rtdb.firebaseio.com',
  projectId: 'wireless-buzzer-app-4457f',
  storageBucket: 'wireless-buzzer-app-4457f.appspot.com',
  messagingSenderId: '557666870373',
  appId: '1:557666870373:web:396313410f899332a4128c',
  measurementId: 'G-L364YM10HE',
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

firebase.analytics();

export default app.database();