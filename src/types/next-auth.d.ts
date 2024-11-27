import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: Users & DefaultSession['user'];
  }

  interface Users {
    id: string;
    name: string;
    email: string;
    avatar: string;
    roleId: number;
  }
}
