import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCsvDGYcZdazFw3SfpJQjfGWMdeTeuFsY8",
  authDomain: "planning-tool-cbbeb.firebaseapp.com",
  databaseURL: "https://planning-tool-cbbeb.firebaseio.com",
  projectId: "planning-tool-cbbeb",
  storageBucket: "planning-tool-cbbeb.appspot.com",
  messagingSenderId: "441571662914"
};

export const fire = firebase.initializeApp(config);

/* Firebase login services*/
export const signup = userInfo => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    .then(res => {
      return res;
    })
    .catch(e => {
      throw e;
    });
};

/*Login with Google*/

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      return res;
    })
    .catch(e => {
      throw e;
    });
};
