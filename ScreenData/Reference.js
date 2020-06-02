import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyC36Img5Qvef54drl3dSKks4Gu6Uy0Pz7Q',
  authDomain: 'crud-a589a.firebaseapp.com',
  databaseURL: 'https://crud-a589a.firebaseio.com',
  projectId: 'crud-a589a',
  storageBucket: 'crud-a589a.appspot.com',
  messagingSenderId: '126713966949',
  appId: '1:126713966949:web:0f19b58424ecd59729f18c',
  measurementId: 'G-XNDY2KRQSY',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const dataRef = firebase.database().ref();
