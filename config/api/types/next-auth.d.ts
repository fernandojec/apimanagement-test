import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: number;
      user_id: string;
      user_name: string;
      email: string;
      exp_token: string;
      iss: string;
      accessToken: string;
      refreshToken: string;
    };
  }
}