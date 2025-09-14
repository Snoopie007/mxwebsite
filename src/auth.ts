import NextAuth, { Session } from "next-auth";
import authConfig from "./auth.config";
import { ExtendedUser } from "./types/next-auth";

const isProduction = process.env.NODE_ENV === "production";
const isPreview = process.env.VERCEL_ENV === "preview";
export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: "/login",
		signOut: "/sign-out",
		error: "/auth/error", // Error code passed in query string as ?error=
		verifyRequest: "/auth/verify-request", // (used for check email message)
		newUser: "/cases"
	},
	session: {
		strategy: "jwt",
	},
	cookies: {
		sessionToken: {
			name: isProduction ? `__Secure-next-auth.monstro-session-token` : `next-auth.session-token`,
			options: {
				domain: isProduction ? ".monstro-x.com" : isPreview ? ".monstro-support.vercel.app" : undefined,
				path: "/",
				httpOnly: true,
				sameSite: "lax",
				secure: isProduction,
			},
		},
	},
	callbacks: {
		jwt: async ({ user, token, session, trigger }) => {

			if (trigger === "update") {
				return { ...token, ...session };
			}

			return { ...token, ...user };
		},
		session: async ({ session, token }: { session: Session, token: ExtendedUser }) => {
			session.user = token
			return session;
		}
	},
	secret: process.env.AUTH_SECRET,
	// debug: process.env.NODE_ENV === "production",
	...authConfig,
});
