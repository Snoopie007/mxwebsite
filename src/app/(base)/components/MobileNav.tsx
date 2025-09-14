import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, MenuIcon } from 'lucide-react'
import { Menu } from "@/libs/data";


function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon size={32} />
            </SheetTrigger>
            <SheetContent className="bg-slate-950 w-[90%] text-white">
                <div className="text-white py-10">
                    <ul className="font-roboto ">
                        {Menu.map((m, i) => (
                            <li key={i} className=" mb-5">
                                {m.childs ? (
                                    <Collapsible className=''>
                                        <CollapsibleTrigger asChild>
                                            <div className='flex font-bold cursor-pointer text-xl items-center justify-between'>
                                                <div className="text-lg lack w-full font-bold">
                                                    {m.title}
                                                </div>
                                                <ChevronDown className="h-5 w-5 cursor-pointer" />
                                                <span className="sr-only">Toggle</span>
                                            </div>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className='py-5 mt-4 text-lg bg-white/5 px-5  rounded-sm'>
                                            <ul>
                                                {m.childs.map((c, i) => (
                                                    <li key={i} className="text-lg mb-3">
                                                        <a href={c.href}>
                                                            {c.title}
                                                            <p className="text-sm text-gray-400">{c.description}</p>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CollapsibleContent>
                                    </Collapsible>
                                ) : (
                                    <a href={m.href} className="text-lg lack w-full font-bold" >
                                        {m.title}
                                    </a>
                                )}

                            </li>
                        ))}


                        <li className="flex gap-4 mt-20">
                            <a href={"https://app.mymonstro.com"} className="border-2 border-white text-center py-4   rounded-sm  w-full font-bold" >Sign In</a>
                            <a href={"/book-demo"} className=" bg-white text-black block text-center lack w-full py-4 rounded-sm font-bold" >Book a Demo</a>
                        </li>
                    </ul>

                </div>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav