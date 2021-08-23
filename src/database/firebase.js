import { firebaseConfig } from "./config";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

export default class Firebase {
  constructor() {
    // if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // } else {
    // firebase.app(); // if already initialized, use that one
    // }

    /* Firebase APIs */
    this.auth = firebase.auth();
    this.db = firebase.database();
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.githubProvider = new firebase.auth.GithubAuthProvider();
    // this.applicationVerifier = firebase.auth.RecaptchaVerifier(
    //   "recaptcha-container"
    // );

    // facebookProvider.addScope("email");
    // facebookProvider.addScope("user_friends");
  }

  // ****************************** Auth API ******************************
  createUserWithEmailAndPassword = (e, p) => {
    this.auth.createUserWithEmailAndPassword(e, p);
  };
  // signInWithPhoneNumber = (phone) => {
  //   this.auth.signInWithPhoneNumber(phone, this.applicationVerifier);
  // };
  signInWithEmailAndPassword = (e, p) => {
    this.auth.signInWithEmailAndPassword(e, p);
  };
  signInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  signInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);
  signInWithGitHub = () => this.auth.signInWithPopup(this.githubProvider);

  sendPasswordResetEmail = (email) => this.auth.sendPasswordResetEmail(email);
  sendEmailVerification = () => {
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });
  };
  updatePassword = (password) => this.auth.currentUser.updatePassword(password);
  logout = () => this.auth.signOut();
  deleteAccount = () => this.auth.currentUser.delete();
  // onAuthStateChanged = () => {
  //   this.auth.on
}
