import authReducer from './authReducer'
import docReducer from './docReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  prescription: docReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer