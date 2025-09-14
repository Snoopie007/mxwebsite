import React from 'react'
import Link from "next/link";

import logo from "@public/images/logo.png";
import Image from "next/image";
import { FooterMenu, Industries } from "@/libs/data";


export function Footer() {
    return (
        <footer className={" bg-black/95 text-white px-5 md:px-0"}>
            <div className="grid md:grid-cols-5 gap-10 py-10 mx-auto  max-w-7xl  lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <div className={"brand"}>
                        <Link href="/"
                            className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                            <Image src={logo} alt="N" width="120" className="" />
                        </Link>
                    </div>
                    <div className='text-base  leading-6 mt-5 font-roboto'>
                        Monstro X is relvolutionizing the way you manage your members and grow your business.
                    </div>
                    <div className='mt-4'>
                        <strong className='mb-2 block'>Need help?</strong>
                        <div>Email us at: <a href="mailto:support@monstro-x.com">support@monstro-x.com</a></div>
                    </div>

                    <div className={"mt-10"}>

                        <div className="flex  gap-3">
                            <Link href="https://www.facebook.com/mymonstrousa"
                                className='w-10 h-10 bg-black/10 rounded-sm flex items-center justify-center' target="_blank" rel="noopener">
                                <span className="sr-only">Facebook</span>

                            </Link>
                            <Link href="https://www.instagram.com/mymonstro/"
                                className='w-10 h-10 bg-black/10 rounded-sm flex items-center justify-center' target="_blank" rel="noopener">
                                <span className="sr-only">Instagram</span>

                            </Link>
                            <Link href="https://www.youtube.com/@MyMonstro"
                                className='w-10 h-10 bg-black/10 rounded-sm flex items-center justify-center' target="_blank" rel="noopener">
                                <span className="sr-only">Youtube</span>

                            </Link>
                        </div>
                    </div>

                </div>
                <div className="w-full col-span-2">
                    <div className={"font-bold mb-5 text-lg font-poppins"}>Industries We Help</div>
                    <div className="grid grid-cols-2 gap-4">
                        <ul className={"children:mb-4 text-base "}>
                            {Industries.slice(0, Math.ceil(Industries.length / 2)).map((industry, index) => (
                                <li key={index}>
                                    {industry}
                                </li>
                            ))}
                        </ul>
                        <ul className={"children:mb-4 text-base "}>
                            {Industries.slice(Math.ceil(Industries.length / 2)).map((industry, index) => (
                                <li key={index + Math.ceil(Industries.length / 2)}>
                                    {industry}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="w-full col-span-1">
                    {FooterMenu.map((menu, index) => (
                        <div key={index} className="w-full ">
                            <div className={"font-bold mb-5 text-lg font-poppins"}>{menu.category}</div>
                            <ul className={"children:mb-4 text-base "}>
                                {menu.items.map((item, index) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="w-full text-base ">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}

                </div>


            </div>


            <div className="py-6 text-base max-w-7xl m-auto text-left text-gray-600 dark:text-gray-400">
                Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
                <Link href="#" target="_blank" rel="noopener">
                    8Bitapp LLC.
                </Link>
                All rights reserved.
            </div>

        </footer>
    )
}
