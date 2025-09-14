import { Star } from 'lucide-react';
import Image from "next/image";
import { cn } from '@/libs/utils';

const TestimonialsData = [
    {
        "name": "Frantz Cadet",
        "image": "cadet-150x150.webp",
        "review": "I was not prepared for how fast the leads would come in once Monstro was installed... Honestly, with what I am experiencing right now, it would be difficult for me not to recommend Monstro. The experience I have had so far is overwhelming. Ive been in business for more than 26 years and have not ever experienced anything like Monstro before.",
        "company": "Cadet Martial Arts"
    },
    {
        "name": "Jose and Jana D",
        "image": "jose-150x150.webp",
        "review": "I think we were live for about 2 weeks and we already received 5 leads and signed up 3 of them. It just goes to show the quality of the leads. .. We are able to call and ... get them on board with us.",
        "company": "Sovereign World Wide"
    },
    {
        "name": "Jeff Remster",
        "image": "jeff-150x150.webp",
        "review": "Once Monstro was installed... it didnt take long for me to see new students coming through the door... I would absolutely recommend Monstro to other Martial Arts Schools.",
        "company": "Seven Star Martial Arts"
    },
    {
        "name": "Aline Pena",
        "image": "aline-p-150-150.webp",
        "review": "We used to get maybe 1-3 leads a month from organic traffic. Now we average 15- 18 leads without paid ads.",
        "company": "On Your Toes Dance Academy"
    },
    {
        "name": "Jacqueline Dolan",
        "image": "jaq-150-150.webp",
        "review": "In my first 2 weeks I got 24 leads and 12 new students, which is incredible.",
        "company": "Golden Phoenix CrossFit"
    }
]

function Testimonials({ hasTitle = false, className = "" }: { hasTitle?: boolean, className?: string }) {
    function renderStars() {
        return (
            <>
                <Star size={20} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={20} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={20} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={20} className="fill-yellow-400 stroke-yellow-400" />
                <Star size={20} className="fill-yellow-400 stroke-yellow-400" />
            </>
        )
    }
    return (
        <section className={cn("relative py-12 lg:py-24 px-5 lg:px-0 md:py-36", className)}>
            <div className="max-w-6xl mx-auto space-y-8">
                {hasTitle && (
                    <div className="md:flex-1">
                        <h2 className={cn('text-3xl font-bold mb-4')}>
                            What other school owners say...
                        </h2>
                    </div>
                )}

                <div className="flex gap-6 overflow-x-auto lg:overflow-auto ">
                    {TestimonialsData.slice(0, 3).map((testimonial, i) => (
                        <div key={i} className="border lg:min-w-[340px]  min-w-[90%] shadow-sm py-8 px-6 bg-white rounded-lg">

                            <div>
                                <div className="flex gap-1 mb-4">
                                    {renderStars()}
                                </div>

                            </div>
                            <p className="text-lg text-left">{testimonial.review}</p>
                            <div className="flex items-center border-t pt-4 border-gray-100 mt-5">
                                <div className="avatar w-16 h-16 rounded-full  overflow-hidden flex justify-center items-center bg-gray-500">
                                    <Image src={`/images/${testimonial.image}`} width={80} height={80} alt={testimonial.name} className='' />
                                </div>
                                <div className='flex ml-4 text-left'>
                                    <p>
                                        <strong className='block mb-1.5'>{testimonial.name}</strong>
                                        <span className='block text-gray-500'>{testimonial.company}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>



    )
}

export { Testimonials }