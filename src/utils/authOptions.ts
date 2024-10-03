 
 import GithubProvider from "next-auth/providers/github"
 
 
 export const authOptions= {
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      // ...add more providers here
    ],
    secret:process.env.NEXT_AUTH_SECRET_KEY
  }
  