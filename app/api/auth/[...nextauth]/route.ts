import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import '@/types/config'
import axios from "axios";
import jwt_decode from "jwt-decode"
import { headers } from "next/dist/client/components/headers";

export const authOptions: AuthOptions = {
  //export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "nando" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {

        console.log(credentials, process.env.NEXT_PUBLIC_API + '/' + process.env.NEXT_PUBLIC_API_VERSION + "/auth")
        // Add logic here to look up the user from the credentials supplied
        const res = await axios.post(
          process.env.NEXT_PUBLIC_API + '/' + process.env.NEXT_PUBLIC_API_VERSION + "/auth",
          {
            user_name: credentials?.username,
            password: credentials?.password,
          }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        )
        // const res = await fetch(process.env.NEXT_PUBLIC_API + '/' + process.env.NEXT_PUBLIC_API_VERSION + "/auth", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     user_name: credentials?.username,
        //     password: credentials?.password,
        //   }),
        // });
        const res_data = await res.data;
        console.log(res_data)

        if (res.status == 200) {
          // let decoded:{[key: string]: any} = {}
          let decoded = jwt_decode<{ [key: string]: any }>(res_data["access_token"]);
          // console.log(decoded)
          decoded["access_token"] = res_data["access_token"]
          decoded["refresh_token"] = res_data["refresh_token"]
          const user = {
            id: decoded['id'],
            name: decoded['user_name'],
            email: decoded['email'],
            accessToken: res_data["access_token"],
            refreshToken: res_data["refresh_token"]
          }
          // console.log(user)
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          if (res_data["error"] == 'unauthenticated') {
            // return "User not found"
            throw new Error("User not found")
          }
          if (res_data["error"] == 'unauthenticated-invalid password') {
            // return "Invalid Password"
            throw new Error("Invalid Password")
          }
          throw new Error(res_data["error"])
          // If you return null then an error will be displayed advising the user to check their details.

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }

      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signin',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }