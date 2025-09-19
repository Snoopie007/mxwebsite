'use client'

import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import Image from "next/image"


const googleauth = [
    "prompt=consent",
    "scope=https://www.googleapis.com/auth/business.manage",
    "include_granted_scopes=true",
    "response_type=token",
    "client_id=229723933929-g1g81k69abev1n6b6k7i3e07c31kqsjp.apps.googleusercontent.com",
    "redirect_uri=https://www.mymonstro.com/resources/tools/analyzer/select",
]


export default function DemoThankYouPage() {

    const searchParams = useSearchParams()

    function encodeState() {
        return Buffer.from(JSON.stringify({
            firstName: searchParams.get('firstName'),
            lastName: searchParams.get('lastName'),
            email: searchParams.get('email')
        })).toString('base64')
    }
    return (

        <section className=" bg-gray-50  sm:py-32 py-12 w-full px-4 sm:px-0">
            <div className="max-w-3xl m-auto">
                <div className="mb-10">
                    <h1 className="text-4xl sm:text-4xl font-bold font-poppins text-center">
                        Watch this Video For Important Information Regarding Your Discovery Call.
                    </h1>

                </div>
                <div className="flex flex-row-reverse gap-5 mb-10">

                    <div className="flex-1 aspect-video rounded-sm  shadow-lg overflow-hidden ">

                        <iframe
                            height="480"
                            src={`https://fast.wistia.net/embed/iframe/xj7w8wcq2q?seo=true&videoFoam=true`}
                            className="w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                        <script
                            src="https://fast.wistia.net/assets/external/E-v1.js"
                            async
                        ></script>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href={`https://accounts.google.com/o/oauth2/v2/auth?${googleauth.join('&')}&state=${encodeState()}`}
                        className="flex flex-row  gap-3 items-center bg-black font-semibold py-3 px-5 rounded-full text-white">
                        <Image src="/images/google-icon.webp" width={25} height={25} alt="google" />
                        <span className=" text-lg"> Connect with Google</span>
                    </Link>
                </div>
            </div>
        </section >


    )
}
