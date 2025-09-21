"use client"
import Link from "next/link";
import Image from "next/image";
import logo from "@public/images/logo.png";
import MobileNav from "./MobileNav";
import MainNav from "./nav";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { AlertMenu, SupportMenu, UserMenu } from "@/components/navs";
function Header() {
    const { data: session } = useSession();
    console.log(session);
    return (
        <header id={"header"} className={`w-full top-0 left-0  px-5 lg:px-0 `}>
            <div className={"flex flex-row align-middle justify-between max-w-7xl py-4 m-auto z-10 relative "}>
                <div className={"logo flex flex-row align-middle items-center "}>
                    <Link href="/"
                        className="flex h-auto w-full">
                        <Image src={logo} alt="Monstro" width="90" className="block w-full " />
                    </Link>
                </div>
                <div className=' flex-row items-center align-middle justify-center hidden lg:flex ' >
                    <MainNav />
                </div>
                <div className={"rightNav  "}>
                    {session ? (
                        <div className="md:flex md:flex-row  hidden items-center  gap-2 justify-end">
                            <Button variant="default" className="" size="sm" asChild>
                                <Link href="https://app.monstro-x.com/dashboard">
                                    Dashboard
                                </Link>
                            </Button>
                            <UserMenu />
                        </div>
                    ) : (
                        <div className="md:flex md:flex-row  hidden items-center gap-2 justify-end">
                            <Button variant="outline" className="font-semibold" size="sm" asChild>
                                <Link href="https://app.monstro-x.com/auth/login">
                                    Log In
                                </Link>
                            </Button>
                            <Button variant="ghost" className="bg-indigo-600 text-white font-semibold" size="sm" asChild>
                                <Link href={"/book-demo"} >
                                    Book a Demo
                                </Link>
                            </Button>
                        </div>
                    )}

                </div>
                <div className="md:hidden sm:block">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export { Header }