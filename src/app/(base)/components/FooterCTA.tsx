import { Button } from "@/components/ui/button";
import { cn } from "@/libs/utils";
import Link from "next/link";

export function FooterCTA() {
    return (
        <section className="bg-black/95 text-white h-[500px] flex items-center justify-center px-5 lg:px-0 md:py-60">
            <div className="max-w-3xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <div className="space-y-4">
                        <div className="text-indigo-500 font-bold">
                            FUEL YOUR MEMBERSHIP BUSINESS
                        </div>
                        <div className={cn('text-2xl md:text-5xl leading-tight font-bold text-gray-400')}>
                            Last week 523 businesses got started with {' '}
                            <span className="text-white">Monstro-X</span>


                        </div>
                    </div>
                    <span className="text-white text-2xl md:text-4xl font-bold">  Today, it's your turn.</span>
                </div>

                <Button asChild variant="default" size="xl">
                    <Link href="/book-demo">
                        Book a Demo
                    </Link>
                </Button>
            </div>
        </section>
    )
}