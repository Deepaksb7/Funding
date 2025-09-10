// import NextAuth from 'next-auth';
// import GitHubProvider from 'next-auth/providers/github';
// import mongoose from 'mongoose'
// import User from '@/models/User'
// import Payment from '@/models/Payment'
// import connectDB from '@/db/connectDB';

// const authOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       if (account.provider === "github") {
//         await connectDB()
//         const currentUser = await User.findOne({ email: user.email })
//         if (!currentUser) {
//           const newUser = new User({
//             email: user.email,
//             username: user.email.split("@")[0],
//           })
//           await newUser.save()
      
//         }
//         return true
//       }
//     return false
//     },
  
//   async session({ session, user, token }) {
//     await connectDB();
//     const dbUser = await User.findOne({email:session.user.email})

//     if (dbUser) {
//         session.user.name = dbUser.username;
//       }
//       return session
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };




import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDB';

try {
  const authOptions = {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        console.log("-> signIn callback triggered");
        console.log("User:", user);
        console.log("Account:", account);
        console.log("Profile:", profile);
  
        if (account.provider === "github") {
          await connectDB()
          console.log("DB connected for GitHub sign-in");
          const currentUser = await User.findOne({ email: user.email })
          
          if (!currentUser) {
            console.log("User not found in DB, creating new user...");
            const newUser = new User({
              email: user.email,
              username: user.email.split("@")[0],
            })
            await newUser.save()
            console.log("New user saved:", newUser);
          } else {
            console.log("User already exists:", currentUser);
          }
          return true
        }
      return false
      },
    
      async session({ session, user, token }) {
        console.log("-> session callback triggered");
        await connectDB();
        const dbUser = await User.findOne({email:session.user.email})
        console.log("DB user found for session:", dbUser);
  
        if (dbUser) {
            session.user.name = dbUser.username;
            console.log("Session updated with username:", session.user.name);
          }
        return session
      },
    },
  };

  
} catch (error) {
  console.error("NextAuth initialization failed:", error);
  // Re-throw the error to ensure Vercel logs the stack trace
  throw error;
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };