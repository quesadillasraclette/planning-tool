import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { tsArrayType } from "@babel/types";

const config = {
  apiKey: "AIzaSyCsvDGYcZdazFw3SfpJQjfGWMdeTeuFsY8",
  authDomain: "planning-tool-cbbeb.firebaseapp.com",
  databaseURL: "https://planning-tool-cbbeb.firebaseio.com",
  projectId: "planning-tool-cbbeb",
  storageBucket: "planning-tool-cbbeb.appspot.com",
  messagingSenderId: "441571662914"
};

export const fire = firebase.initializeApp(config);

const db = firebase.firestore();
const userRef = db.collection("users");

/*AUTHENTICATION*/
/* Firebase login services*/
export const signup = userInfo => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    .then(res => {
      const user = {
        uid: res.user.uid,
        email: res.user.email,
        username: res.user.displayName || res.user.email,
        photoURL: res.user.photoURL || "",
        type: "operations"
      };
      userRef
        .doc(res.user.uid)
        .set(user)
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
      return user;
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

/*login */

export const login = userInfo => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(userInfo.email, userInfo.password)
    .then(res => {
      return res;
    })
    .catch(e => {
      throw e;
    });
};

export const logout = () => {
  return firebase
    .auth()
    .signOut()
    .then(r => {
      return r;
    })
    .catch(e => {
      throw e;
    });
};

/* Content Services*/

const contentRef = db.collection("contents");

//create//
export const saveContent = obj => {
  const id = contentRef.doc().id;
  obj["id"] = id;
  return contentRef
    .doc(id)
    .set(obj)
    .then(r => {
      return r;
    })
    .catch(e => {
      throw e;
    });
};

//uploadfile
const contentFilesRef = firebase.storage().ref("contents");
export const uploadfile = file => {
  const id = contentRef.doc().id;
  const task = contentFilesRef.child(id).put(file);
  return task;
};

//save - get all
export const getContents = () => {
  return contentRef
    .get()
    .then(res => {
      return res;
    })
    .catch(e => {
      throw e;
    });
};

/*

//update
export const updateContent = (id, obj) => {
  return contentRef
    .doc(id)
    .set(obj)
    .then(res => {
      return res;
    })
    .catch(e => {
      throw e;
    });
};

//delete
export const deleteContent = id => {
  return contentRef
    .doc(id)
    .delete()
    .then(res => {
      return res;
    })
    .catch(e => {
      throw e;
    });
};

*/
