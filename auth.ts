import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

export const { auth, signIn, signOut } = NextAuth({
  ...(authConfig as any),
  secret: process.env.AUTH_SECRET,
  // ⚠️ JAWNA STRATEGIA SESJI: To zapobiega wywołaniu 'headers' poza zakresem żądania!
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'credentials',
      async authorize(credentials) {
        console.log("=== URUCHOMIONO PLIK AUTH.TS ===");
        
        // Bezwarunkowo wpuszczamy użytkownika
        return {
          id: '1',
          name: 'Test User',
          email: 'user@nextmail.com',
        };
      },
    }),
  ],
});