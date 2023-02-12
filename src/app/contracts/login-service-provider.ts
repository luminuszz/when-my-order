import { type User } from "@app/entities/user";

export interface LoginWithGoogleResponse {
  user: User;
}

export interface LoginServiceProvider {
  loginWithGoogle: () => Promise<LoginWithGoogleResponse>;
  onUserChanges: (callback: (user: User | null) => void) => () => void;
}
