import { LoginService } from "@app/services/login-service";
import { loginServiceFirebaseProvider } from "@infra/firebase/login-service-firebase-provider";

export const loginService = new LoginService(loginServiceFirebaseProvider);
