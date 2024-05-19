import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { usePathname } from "next/navigation";
export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "cred",
      name: "Credentials",
      async authorize(credentials) {
        // @ts-ignore
        const { email, password } = credentials;
        console.log(email, " ", password);
        console.log(process.env.NEXT_PUBLIC_api_url + "/api/login");
        const result = await fetch(
          process.env.NEXT_PUBLIC_api_url + "/api/login",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        let user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        const result2 = await result.json();
        console.log(result2);
        if (result2.error) {
          console.log("error");
        }
        // Add logic here to look up the user from the credentials supplied
        if (result2.success) {
          console.log(result2.success);
          user.id = String(result2.success.id);
          user.name = result2.success.name;
          user.email = result2.success.email;
          return user;
        } else {
          return null;
        }
      },
      credentials: {
        username: {
          label: "email",
          type: "text",
          placeholder: "guest@gmail.com",
        },
        password: { label: "password", type: "password" },
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  // },
};
// @ts-ignore
export default NextAuth(authOptions);
