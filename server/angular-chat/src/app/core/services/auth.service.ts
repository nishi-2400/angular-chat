import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
// fireabase.auth.UserCredentialだとエラーが出るため、"auth-type"を使う
import { UserCredential } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    // 認証状況
    // this.afAuth.onAuthStateChanged(user => console.log(user));
  }

  // fireabase.auth.UserCredentialだとエラーが出る
  create(email: string, password: string): Promise<void> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        const { user } = credential;
        const actionCodeSettings = {
          url: `http://localhost:4200/?newAccount=true&email=${user!.email}`
        };

        user!.sendEmailVerification(actionCodeSettings);
      });
  }
}
