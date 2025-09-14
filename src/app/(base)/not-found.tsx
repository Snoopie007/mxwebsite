import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="py-40 flex flex-col items-center justify-center">
            <div className="text-center">
                <Image src="/images/404.webp" alt="404" width={300} height={300} className="m-auto" />
                <p className="mt-10 text-lg uppercase font-semibold">Oops! Looks like the page you're looking for is not found!</p>
                <div className="flex flex-row items-center justify-center gap-4 py-6">
                    <Link href="/" className="inline-flex border-2 border-indigo-500 bg-indigo-500 text-white px-4 py-3 text-base uppercase font-bold rounded-sm">
                        Return Home
                    </Link>
                    <Link href="/book-demo" className="inline-flex border-2 border-indigo-500 text-indigo-500 px-4 py-3 text-base uppercase font-bold rounded-sm">
                        Book a Demo
                    </Link>
                </div>
            </div>
        </main>
    )
}