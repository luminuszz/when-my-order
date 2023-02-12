import {
  type LoginServiceProvider,
  type LoginWithGoogleResponse,
} from "@app/services/login-service-provider";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import auth from "@react-native-firebase/auth";
import { type User } from "@app/entities/user";

export class LoginServiceFirebaseProvider implements LoginServiceProvider {
  constructor(private readonly firebaseAuth: typeof auth) {}

  async loginWithGoogle(): Promise<LoginWithGoogleResponse> {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

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
