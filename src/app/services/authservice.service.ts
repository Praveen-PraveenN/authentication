import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { Auth, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor( public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }  

  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result: any) => {
        console.log('You have been successfully logged in!')
    }).catch((error: any) => {
        console.log(error)
    })
  }






}
