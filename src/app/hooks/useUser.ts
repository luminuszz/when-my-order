import { useEffect, useState } from "react";
import { type User } from "@app/entities/user";
import { loginService } from "@app/services";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return loginService.onUserChanges(setUser);
  }, []);

  return {
    user,
  };
}
