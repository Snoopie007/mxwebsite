import Link from "next/link";
import Image from "next/image";
import logo from "@public/images/logo.png";
import MobileNav from "./MobileNav";
import MainNav from "./nav";

function Header() {
    return (
        <header id={"header"} className={`w-full top-0 left-0  px-5 lg:px-0 `}>
            <div className={"flex flex-row align-middle justify-between max-w-7xl py-4 m-auto z-10 relative "}>
                <div className={"logo flex flex-row align-middle items-center "}>
                    <Link href="/"
                        className="flex h-auto w-full">
                        <Image src={logo} alt="Monstro" width="120" className="block w-full " />
                    </Link>
                </div>
                <div className=' flex-row items-center align-middle justify-center hidden lg:flex ' >
                    <MainNav />
                </div>
                <div className={"rightNav  "}>
                    <div className="md:flex md:flex-row  hidden items-center justify-end">
                        <a href="https://app.mymonstro.com" className='text-black px-4 font-semibold hover:border-black  hover:text-black rounded-sm text-base'>
                            Sign In</a>
                        <Link href={"/book-demo"} className='bg-black text-white px-4 py-2.5 font-semibold  hover:bg-indigo-500 hover:text-white  rounded-sm text-base'>Book a Demo</Link>
                    </div>
                    <div className="md:hidden sm:block">
                        <MobileNav />
                    </div>
                </div>
            </div>


        </header>
    )
}

export { Header }