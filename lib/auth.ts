import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    newUser: "/signUp",
  },
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(`🚀 ~ credentials:`, credentials);
        if (!credentials?.email || !credentials?.password) {
          return Promise.reject(new Error("All fields are mandatory"));
        } else {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (!user) {
            return Promise.reject(new Error("User not found."));
          } else {
            const comparePassword = await compare(
              credentials.password,
              user.password as string
            );
            if (comparePassword) {
              if (!user.verified) {
                return Promise.reject(
                  new Error("User is not verified by system.")
                );
              } else {
                return user;
              }
            } else {
              return Promise.reject(new Error("Check your email or password"));
            }
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, profile, account, trigger, session }) {
      console.log(`🚀 ~ user:`, user);
      if (trigger === "update") {
        token.name == session.name;
        token.picture == session.image;
      } else {
      }
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session, token }) {
      const user = await prisma.user.findUnique({
        where: {
          email: token.email as string,
        },
        select: {
          name: true,
          email: true,
          password: false,
          role: true,
          contact: true,
          profileImage: true,
          verified: true,
          professionalInfo: true,
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      session.user = user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
