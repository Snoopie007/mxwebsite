"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { Button } from "@/components/ui";
import { LogoScroller } from "./BrandScroller";



export function HeroSection() {
    return (
        <section className={cn("relative py-22  px-5 lg:px-0")}>
            <NoiseFilter />
            <BackgroundGradient />

            <div className="max-w-5xl mx-auto">
                <div className="flex gap-6 flex-col items-center justify-center">
                    <div className="w-[60%] mx-auto space-y-4">
                        <div className="text-center space-y-3">
                            <h1 className={cn('text-4xl leading-tight font-bold font-poppins')}>

                                Member Management Software That Grows Your Business
                            </h1>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Monstro-X uses proven behavioral psychology—not gimmicks—to help your members stay consistent,
                                competitive, and committed.
                            </p>
                        </div>
                        <div className="flex lg:flex-row flex-col justify-center lg:gap-4 mb-6">
                            <Button asChild variant="default" size="xl" className="font-semibold bg-indigo-600 text-white z-99">
                                <Link href="/book-demo">
                                    Book a Demo
                                </Link>
                            </Button>
                            {/* <Button asChild variant="default" size="lg">
                                <Link href="/resources/tools/analyzer">
                                    Watch in Action
                                </Link>
                            </Button> */}
                        </div>
                    </div>
                    <div className="relative overflow-clip w-full max-w-full max-h-[540px] h-full isolate"
                        style={{
                            WebkitMaskImage: 'linear-gradient(180deg, #000, #000 70%, transparent)',
                            maskImage: 'linear-gradient(180deg, #000, #000 70%, transparent)'
                        }}>
                        <div className=" rounded-md p-2 border border-gray-200">
                            <div className="bg-white rounded-lg overflow-hidden">
                                <Image src={`/images/monstrox-dash.webp`}
                                    alt="Monstro-X Platform Dashboard"
                                    width={1280}
                                    height={1280}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LogoScroller />
        </section>
    )
}

function NoiseFilter() {
    return (
        <svg
            fill="none"
            height="957"
            preserveAspectRatio="none"
            viewBox="0 0 1600 800"
            width="1600"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 top-1/2 max-w-screen pointer-events-none w-screen h-[700px] contrast-100 brightness-[170%] transform -translate-x-1/2 -translate-y-1/2 opacity-10 z-99"
            style={{ transform: 'translate(-50%, -50%) translateZ(1px)' }}
        >
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"></feTurbulence>
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)"></rect>
        </svg>
    );
}

function BackgroundGradient() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1600"
            height="957"
            viewBox="0 0 1600 957"
            fill="none"
            preserveAspectRatio="none"
            className="absolute left-1/2 top-1/2 max-w-screen pointer-events-none opacity-30 -z-20 transform -translate-x-1/2 -translate-y-1/2"
        >
            <g filter="url(#filter0_f_1_41378)">
                <path
                    d="M1367.5 592.5C1411.9 435.641 1475 366 1138.53 416.716C666.86 346.799 390.776 198.005 264.775 276.296C143.573 351.606 343.398 344.178 157.167 453.284C-55.802 578.055 974.05 591.222 1160.46 606.225C1182.36 607.987 1204.71 611.414 1225.75 616.049C1311.38 634.915 1348.5 813.999 1367.5 592.5Z"
                    fill="url(#paint)"
                />
            </g>
            <defs>
                <filter id="filter0_f_1_41378" x="-125.682" y="0.123413" width="1782.96" height="956.141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="127" />
                </filter>
                <linearGradient id="paint" x1="652.428" y1="391.04" x2="639.353" y2="525.213" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#7612FA" />
                </linearGradient>
            </defs>
        </svg>
    );
}
