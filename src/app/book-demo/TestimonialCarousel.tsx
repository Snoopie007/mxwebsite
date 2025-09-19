'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { reviews } from "@/libs/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function TestimonialCarousel() {
    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )
    function renderStars() {
        return (
            <>
                <FaStar size={20} className="fill-yellow-400" />
                <FaStar size={20} className="fill-yellow-400" />
                <FaStar size={20} className="fill-yellow-400" />
                <FaStar size={20} className="fill-yellow-400" />
                <FaStar size={20} className="fill-yellow-400" />
            </>
        )
    }
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full lg:max-w-[640px] max-w-[280px] "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent >

                {reviews.map((review, i) => (
                    <CarouselItem key={i} className="max-w-[640px] m-auto lg:min-w-[340px]  min-w-[90%]   bg-white ">
                        <div>
                            <div className="flex gap-1 mb-4">
                                {renderStars()}
                            </div>

                        </div>
                        <p className="text-lg text-left">{review.review}</p>
                        <div className="flex items-center  mt-5">
                            <div className="avatar w-16 h-16 rounded-full  overflow-hidden flex justify-center items-center bg-gray-500">
                                <Image src={`/images/${review.image}`} width={80} height={80} alt={review.name} className='' />
                            </div>
                            <div className='flex ml-4 text-left'>
                                <p>
                                    <strong className='block mb-1.5'>{review.name}</strong>
                                    <span className='block text-gray-500'>{review.company}</span>
                                </p>
                            </div>
                        </div>
                    </CarouselItem>

                ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
