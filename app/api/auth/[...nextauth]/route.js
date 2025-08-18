import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDB';

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        await connectDB()
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
          })
          await newUser.save()
      
        }
        return true
      }
    return false
    },
  
  async session({ session, user, token }) {
    const dbUser = await User.findOne({email:session.user.email})
    console.log(dbUser)
    if (dbUser) {
        session.user.name = dbUser.username;
      }
      return session
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
