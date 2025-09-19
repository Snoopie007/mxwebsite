
import LandingFooter from '@/app/lp/elements/footer';
import '@public/landing.scss';
import Image from 'next/image';
import logo from "@public/images/logo.png";

export default function SchedulerLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    return (
        <main className="bg-gray-100 min-h-screen">
            <header className={`w-full top-0 left-0  px-5 lg:px-0 `}>
                <div className={"flex flex-row align-middle justify-between max-w-7xl py-4 m-auto z-10 relative "}>
                    <div className={"logo flex flex-row align-middle items-center "}>

                        <Image src={logo} alt="Monstro" width="100" className="block w-full " />

                    </div>

                </div>


            </header>
            {children}
            <LandingFooter />

        </main>
    )
}
