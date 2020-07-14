import firebase from 'firebase/app';
import {key} from './utils/time';
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyButWBDUS6KDb2ohPzBM7ZfVeaFlwUvx6s",
  authDomain: `${key}-trace.firebaseapp.com`,
  databaseURL: `https://${key}-trace.firebaseio.com`,
  storageBucket: `${key}-trace.appspot.com`,
  messagingSenderId: "1046612858521"
}

firebase.initializeApp(config)

export default firebase

