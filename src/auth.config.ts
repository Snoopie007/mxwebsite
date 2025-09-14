import { CredentialsSignin, type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

class CustomLoginError extends CredentialsSignin {
	constructor(code: string) {
		super();
		this.code = code;
		this.message = code;
		this.stack = undefined;
	}
}


export default {
	providers: [
		Credentials({
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
				token: { label: "Token", type: "text" },
				type: { label: "Type", type: "text" },
			},
			authorize: async (credentials) => {
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				try {



					return {

					};
				} catch (error) {
					console.log(error);
					if (error instanceof CustomLoginError) {
						throw error;
					}
					throw new CustomLoginError("Invalid password or email.");
				}
			},
		}),
	],
} satisfies NextAuthConfig;
