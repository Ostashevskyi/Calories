import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/server/client/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const options = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPassValid = credentials.password === user.password;

        if (!isPassValid) {
          return null;
        }

        return {
          id: user.id + "",
          email: user.email,
          name: `${user.first_name} ${user.second_name}`,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
    jwt: ({ token, user }) => {
      console.log("JWT Callback", { token, user });

      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
  },
};