import { NextResponse } from "next/server"
import { auth } from "./auth"

const publicPaths = [
	"/login",
]


export default auth(async (req) => {

	try {
		const { pathname } = req.nextUrl
		const isLoggedin = !!req.auth


		/* Handle home page and dashboard redirects (only for web, not for mobile) */
		if (isLoggedin) {

			if (pathname.startsWith("/api/")) {
				return NextResponse.next()
			}
			/* Redirect to Dashboard if no locations */
			if (publicPaths.some((path) => pathname.startsWith(path))) {
				return NextResponse.redirect(new URL(`/`, req.nextUrl.origin))
			}

		}

		/* Set cache headers for API and dashboard routes */
		return NextResponse.next()

	} catch (error) {
		console.error("Middleware error:", error)
		return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
	}
})

export const config = {
	matcher: ["/((?!sign-in|_next/static|_next/image|images|favicon.ico).*)"],
}
