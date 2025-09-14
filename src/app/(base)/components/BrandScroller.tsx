'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Logos = [
    { image: "g5.webp", alt: "Logo 1" },
    { image: "t1.webp", alt: "Logo 2" },
    { image: "t2.webp", alt: "Logo 3" },
    { image: "t3.webp", alt: "Logo 4" },
    { image: "t4.webp", alt: "Logo 5" },
    { image: "t6.webp", alt: "Logo 7" }
]

export function LogoScroller() {
    const [isHovered, setIsHovered] = useState(false);

    const maskStyle = {
        WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 10%, #000 90%, transparent)',
        maskImage: 'linear-gradient(90deg, transparent 0, #000 10%, #000 90%, transparent)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat'
    };

    return (
        <section className="py-8 overflow-hidden relative">
            <div className="max-w-6xl mx-auto space-y-4 text-center">
                <p className="text-gray-500 text-sm font-bold">
                    Monstro X powers 1,000+ local businesses
                </p>
                <div
                    className="relative w-full"
                    style={maskStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex"
                        animate={!isHovered ? {
                            x: [0, -50 * Logos.length * 8]
                        } : {}}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ pointerEvents: 'none' }}
                    >
                        {Logos.map((logo, index) => (
                            <LogoItem key={index} logo={logo} />
                        ))}
                        {Logos.map((logo, index) => (
                            <LogoItem key={`duplicate-${index}`} logo={logo} />
                        ))}
                        {Logos.map((logo, index) => (
                            <LogoItem key={`triple-${index}`} logo={logo} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

interface LogoItemProps {
    logo: typeof Logos[0];
    keyPrefix?: string;
}

function LogoItem({ logo, keyPrefix = "" }: LogoItemProps) {
    return (
        <motion.div
            key={keyPrefix}
            className="flex-shrink-0 mx-8 h-12 w-24 relative grayscale hover:grayscale-0 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
        >
            <Image
                src={`/images/logos/${logo.image}`}
                alt={logo.alt}
                fill
                className="object-contain"
            />
        </motion.div>
    );
}