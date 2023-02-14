import {
  type LoginServiceProvider,
  type LoginWithGoogleResponse,
} from "@app/contracts/login-service-provider";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GOOGLE_WEB_CLIENT_ID } from "@env";

import auth from "@react-native-firebase/auth";
import { type User } from "@app/entities/user";
import { FirebaseError } from "@infra/firebase/firebase.error";

export class LoginServiceFirebaseProvider implements LoginServiceProvider {
  constructor(private readonly firebaseAuth: typeof auth) {
    GoogleSignin.configure({
      scopes: ["email", "profile"],
      webClientId: GOOGLE_WEB_CLIENT_ID,
    });
  }

  async loginWithGoogle(): Promise<LoginWithGoogleResponse> {
    try {
      await GoogleSignin.hasPlayServices();

      const { idToken } = await GoogleSignin.signIn();

      const googleCredential =
        this.firebaseAuth.GoogleAuthProvider.credential(idToken);

      const results = await this.firebaseAuth().signInWithCredential(
        googleCredential
      );

      return {
        user: {
          name: results.user.displayName ?? "user",
          id: results.user.uid,
          email: results.user.email ?? "",
        },
      };
    } catch (e) {
      if (e instanceof Error) {
        throw new FirebaseError(e.message, "auth");
      }
      throw e;
    }
  }

  onUserChanges(callback: (user: User | null) => void): () => void {
    return () => {
      return this.firebaseAuth().onAuthStateChanged((user) => {
        callback(
          user != null
            ? {
                name: user.displayName ?? "user",
                id: user.uid,
                email: user.email ?? "",
              }
            : null
        );
      });
    };
  }
}

export const loginServiceFirebaseProvider = new LoginServiceFirebaseProvider(
  auth
);
