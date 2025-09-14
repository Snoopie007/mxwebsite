
'use client'
import { PlayCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/libs/utils"


// export interface VideoTestimonialsProp {
//     name: string
//     image: string
//     videoId: string
//     business: string
// }

const VideoTestimonialsData = [
    {
        name: "Jose and Jana D",
        image: "jose-case.webp",
        videoId: "YlHUanpkMrs",
        business: "Sovereign World Wide"
    },
    {
        name: "Jeff Remster",
        image: "jeff-case.webp",
        videoId: "RMwTEGf1t5k",
        business: "Seven Star Martial Arts"
    },
    {
        name: "Patrick",
        image: "patrick-case.webp",
        videoId: "GHrK640CmKQ",
        business: "Jungle Gym"
    },
    {
        name: "Carlos Leal",
        image: "carlos-case.webp",
        videoId: "HLFUfPlfsXg",
        business: "Graciie BJJ"
    },
    {
        name: "Frantz Cadet",
        image: "cadet-case.webp",
        videoId: "rb4_UyZ6Rek",
        business: "Cadet Martial Arts"
    },
    {
        name: "Sang Kim",
        image: "sang-case.webp",
        videoId: "bLbMX3j8V8A",
        business: "Martial Arts USA"
    },

]

export function VideoTestimonials({ className }: { className?: string }) {
    return (
        <section className={cn("relative py-12 lg:py-24 px-5 lg:px-0 md:py-36", className)}>
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="md:flex-1">
                    <h2 className={cn('text-3xl font-bold mb-4')}>
                        Want to Become Our Next Success Story?
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 mb-10 gap-4">
                    {VideoTestimonialsData.map((t) => (
                        <div key={t.name} >
                            <div className="shadow-md">
                                <TestimonialLoader testimonial={t} />
                            </div>
                            <div className="text-center w-full mt-3">
                                <strong className="text-lg block">{t.name}</strong>
                                <span>{t.business}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


function TestimonialLoader({ testimonial }: { testimonial: typeof VideoTestimonialsData[0] }) {
    const [video, setVideo] = useState<string | null>(null);

    function activateVideo(id: string) {
        if (id) setVideo(id);
    }
    function renderTestimonial() {

        if (video) {
            return (
                <div className='aspect-video'>
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video}?autoplay=1`}

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>

                    </iframe>
                </div>
            )
            // return (
            //     <div className='videoWrp rounded-md overflow-hidden'>
            //         <iframe
            //             height="480"
            //             src={`https://fast.wistia.net/embed/iframe/${currentTask.videoId}?seo=true&videoFoam=true`}
            //             className='w-full'
            //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //             allowFullScreen
            //             title="Embedded youtube"
            //         />
            //         <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
            //     </div>
            // )
        } else {
            return (
                <>
                    <Image src={`/images/${testimonial.image}`} width={600} height={250} alt="" className="w-full object-cover" />
                    <div className="md:w-[80px] w-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <PlayCircle size={80} className="w-full cursor-pointer fill-slate-800/70 stroke-slate-300 stroke-1" />
                    </div>
                </>
            )
        }
    }

    if (testimonial) {
        return (
            <div className="relative border rounded-lg overflow-hidden" onClick={() => { activateVideo(testimonial.videoId) }}>
                {renderTestimonial()}
            </div>
        )
    }

}