export class FirebaseError extends Error {
  constructor(public readonly message: string, client: "auth" | "other") {
    super(message);
  }
}
