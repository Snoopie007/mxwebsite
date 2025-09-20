import Analytics from './analytics';
import '@public/globals.css'
import { Poppins, Roboto, } from 'next/font/google';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400", "700", "800"],
    variable: "--font-poppins"
});


const roboto = Roboto({
    subsets: ['latin'],
    weight: ["400", "500", "700", "900"],
    variable: "--font-roboto"
})


export const metadata: Metadata = {
    title: {
        template: '%s | Monstro X',
        default: "Monstro X",
    },
    description: "",
    applicationName: "Monstro X",
    authors: [{ name: "Monstro X" }],
    generator: 'Next.js',
    keywords: [],
    referrer: 'origin-when-cross-origin',
    creator: 'Steven Yang',
    publisher: 'Steven Yang',
    metadataBase: new URL('https://monstro-x.com/'),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>


            <SessionProvider>
                <body className={"font-roboto"}>
                    <Analytics />

                    <Suspense>
                        {children}
                    </Suspense>

                </body>
            </SessionProvider>

        </html>
    )
}
