import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from 'next/headers'
import { parse } from 'cookie'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/functional-implement/auth/signin',
    newUser: '/functional-implement/auth/signup',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        })
        const setCookie = authResponse.headers.get('Set-Cookie')
        console.log('set-cookie', setCookie)
        if (setCookie) {
          const parsed = parse(setCookie)
          cookies().set('connect.sid', parsed['connect.sid'], parsed) // 브라우저에 쿠키를 심어주는 것
        }
        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()
        console.log('user', user)
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        }
      },
    }),
  ],
})

// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials";
// import { cookies } from 'next/headers'
// import { parse } from 'cookie';

// export const {
//   handlers: {GET, POST},
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//     pages: {
//         signIn: '/functional-implement/auth/signin',
//         newUser: '/functional-implement/auth/signup',
//     },
//   providers: [
//       CredentialsProvider({
//         name: "Credentials",
//         credentials: {
//             username: { label: "Username", type: "text", placeholder: "jsmith" },//
//             password: {  label: "Password", type: "password" } //
//       },
//       async authorize(credentials) {
//         const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         })
//         const setCookie = authResponse.headers.get('Set-Cookie');
//         console.log('set-cookie', setCookie);
//         if (setCookie) {
//           const parsed = parse(setCookie);
//           cookies().set('connect.sid', parsed['connect.sid'], parsed); // 브라우저에 쿠키를 심어주는 것
//         }
//         if (!authResponse.ok) {
//           return null
//         }

//         const user = await authResponse.json()
//         console.log('user', user);
//         return {
//           email: user.id,
//           name: user.nickname,
//           image: user.image,
//           ...user,
//         }
//       },
//     }),
//   ]
// });
