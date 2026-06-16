import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// Inicjalizujemy NextAuth bezpośrednio w Middleware przy użyciu authConfig
export default NextAuth(authConfig).auth;
 
export const config = {
  // Ten matcher określa, które ścieżki mają być sprawdzane przez middleware
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};