import { type LoginServiceProvider } from "@app/contracts/login-service-provider";
import { type User } from "@app/entities/user";

export class LoginService {
  constructor(private readonly loginServiceProvider: LoginServiceProvider) {}

  async loginWithGoogle() {
    return await this.loginServiceProvider.loginWithGoogle();
  }

  async onUserChanges(callback: (user: User | null) => void) {
    return this.loginServiceProvider.onUserChanges(callback);
  }
}
