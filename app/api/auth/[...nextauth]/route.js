import NextAuth from 'next-auth';
import pjmeDBPrismaClient from '@/lib/pjme-prisma-client';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // If redirect URL is specified with relative path
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      return baseUrl;
    },
    async signIn({ profile }) {
      if (profile) {
        const user = await pjmeDBPrismaClient.admin.findUnique({
          where: {
            id: profile.sub,
          },
        });
        if (!user) return '/signin';
      }
      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await pjmeDBPrismaClient.admin.findUnique({
          where: {
            id: profile.sub,
          },
        });

        token.userId = profile.pub;
        token.picture = user.picture;
        token.first_name = profile.given_name;
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      session.user.image = token.picture;
      session.user.name = token.first_name;
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
