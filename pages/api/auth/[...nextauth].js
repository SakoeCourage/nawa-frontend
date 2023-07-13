import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: 'credentials',
      credentials: {
        phoneNumber: { label: "PhoneNumber", type: "text", placeholder: "(000) 000 0000" },
        otp: { label: "otp", type: "text" }
      },

      async authorize(credentials, req) {
        const { phoneNumber, otp } = credentials
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify({
              'phoneNumber': phoneNumber,
              'otp': otp
            }),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();
          if (res.ok && user) {
            return {
              accessToken: user?.token,
              email: user?.user?.email ?? '',
              name: `${user?.user?.firstName} ${user?.user?.lastName}`,
              id: user.user._id,
              ...user?.user
            };
          } else {
            return null;
          }
        } catch (error) {
          console.log(error)
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },

  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (token) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = user.accessToken
        token.id = user.id
      }
      return token
    },

  },
  pages: {
    signIn: '/?login=true'
  }
};

export default NextAuth(authOptions)