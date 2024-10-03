 
 import GithubProvider from "next-auth/providers/github"
 import GoogleProvider from "next-auth/providers/google"
 
 
 export const authOptions= {
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      // ...add more providers here
    ],
    secret:process.env.NEXT_AUTH_SECRET_KEY
  }
  