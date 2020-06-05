const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


exports.sympCreated = functions.firestore
  .document('prescription/{presId}')
  .onCreate(doc => {
    const notification = {
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
});