import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './db/client';
import { compare } from 'bcrypt';
import { Users } from '@prisma/client';
import NextAuth, { getServerSession } from 'next-auth';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id + '',
          email: user.email,
          name: user.name,
          roleId: user.roleId,
          avatar: user.avatar,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user, session, trigger }) => {
      // console.log('JWT Callback', { token, user })
      // console.log('JWT Callback', { token, user, trigger, session });

      if (trigger === 'update' && session?.user) {
        return {
          ...token,
          name: session.user.name || token.name,
          email: session.user.email || token.email,
          avatar: session.user.avatar || token.avatar,
        };
      }

      if (user) {
        const u = user as unknown as Users;
        return {
          ...token,
          id: u.id,
          roleId: u.roleId,
          avatar: u.avatar,
        };
      }

      return token;
    },
    session: ({ session, token, user }) => {
      // console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          roleId: token.roleId,
          avatar: token.avatar,
        },
      };
    },
  },
  pages: {
    signIn: '/auth',
  },
};
export const getServerAuthSession = () => getServerSession(authOptions);
