import * as admin from 'firebase-admin'

var serviceAccount = require('../../handtalkchallenge-firebase-adminsdk-t8hly-4979034fe4.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://handtalkchallenge-default-rtdb.firebaseio.com',
  storageBucket: 'handtalkchallenge.appspot.com'
});

const auth = admin.auth()
const database = admin.database()
const storage = admin.storage()

export {
  admin,
  auth,
  storage,
  database
}