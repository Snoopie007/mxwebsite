"use client"
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuLink
} from "@/components/ui"
import { cn } from '@/libs/utils';
import { Menu } from '@/libs/data';

export default function MainNav() {
    return (


        <NavigationMenu className='flex-row h-full children:h-full ' >
            <NavigationMenuList className='gap-4 h-full'>
                {Menu.map((m, i) => (
                    <NavigationMenuItem key={i} className={cn(' items-center', (m.childs && "h-full"))}>
                        {m.childs ? (
                            <>
                                <NavigationMenuTrigger className='text-base font-semibold h-full'>{m.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {m.childs.map((c) => (
                                            <ListItem
                                                key={c.title}
                                                title={c.title}
                                                href={c.href}
                                            >
                                                {c.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        ) : (

                            <a href={m.href} className='text-base font-semibold ' >
                                {m.title}
                            </a>
                        )}
                    </NavigationMenuItem>

                ))}
            </NavigationMenuList>
        </NavigationMenu >
    )
}


const ListItem = React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-bold leading-none">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"