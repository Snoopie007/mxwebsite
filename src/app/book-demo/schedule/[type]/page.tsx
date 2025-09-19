'use client'
import VideoTstimonial from "@/(base)/components/VideoTestimonials"
import { Button } from "@/components/ui/button"
import { cn } from "@/libs/utils"
import Script from "next/script"

type BookerPage = {
    type: string
    title: string
    description: string
    calendarId: string
    video?: string
    cta?: string
    uid: string
}

const BookerPages: BookerPage[] = [
    {
        type: "demo",
        title: "Choose a Time For Your Call Below",
        description: "Simply choose a time for your demo call and will be in touch with you to confirm. Excited to meet you soon!👇👇👇",
        calendarId: "3UsRjJxkiQPKBB0izznT",
        uid: "b3HqA0PhB9EN8FMu6fm2_1700338689923"
    },
    {
        type: "strategy",
        title: "Uncover Missed Opportunities and Enroll More Students.",
        description: " Want help recovering them? Get a free complimtary 1 on 1 strategy session plus a step-by-step 7-week action plan showing you exactly you can capture miss oppertunities and enroll more students.👇👇👇",
        calendarId: "3UsRjJxkiQPKBB0izznT",
        video: "https://www.youtube.com/embed/fpNkLmsyQUM",
        cta: "Schedule Strategy Session",
        uid: "b3HqA0PhB9EN8FMu6fm2_1700338689923"
    }

]


export default async function SchedulePage(props: { params: Promise<{ type: string }> }) {
    const params = await props.params
    const page: BookerPage | undefined = BookerPages.find(p => p.type === params.type)

    const handleClickScroll = () => {
        const element = document.getElementById('schdeduler');
        if (element) {

            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!page) return (<div>Oops we cannot find this page</div>)

    return (

        <>
            <section className={cn("max-w-2xl m-auto text-center w-full py-10 md:px-0 px-5",
                (params.type === "strategy") && "max-w-4xl"
            )}>
                <div className="mb-6">
                    <h4 className="text-3xl font-bold">{page.title}</h4>
                    {/* <p className="text-xl leading-8 mt-4">
                        {page.description}
                    </p> */}
                </div>
                {params.type.includes("demo") && (
                    <div id="schdeduler" className="shadow-sm">
                        <iframe
                            src={`https://api.mymonstro.com/widget/booking/${page.calendarId}`}
                            style={{ width: "100%", height: "100%", border: 'none', overflow: "hidden" }}
                            id={page.uid} className="overflow-hidden"></iframe>
                        <Script src="https://api.mymonstro.com/js/form_embed.js" strategy="afterInteractive" type="text/javascript" />
                    </div>
                )}
                {page.video && (
                    <div className="block max-w-4xl w-full m-auto">

                        <div className="flex-1 aspect-video rounded-md overflow-hidden shadow-lg">
                            <iframe className="w-full h-full" src={page.video}  ></iframe>
                        </div>

                    </div>
                )}
                {page.cta && (
                    <div className="mt-8">
                        <Button
                            onClick={handleClickScroll}
                            className="text-lg rounded-[3px] py-7 px-10 bg-purple-600 shadow-sm hover:bg-purple-950 font-semibold">
                            {page.cta}
                        </Button>
                    </div>

                )}
            </section>
            <VideoTstimonial className="bg-white" />
            {params.type === "strategy" && (
                <section className="bg-gray-100">
                    <div className="max-w-xl m-auto text-center w-full pt-10 pb-20 md:px-0  px-5">
                        <div className="mb-6">
                            <h6 className="text-3xl mb-4 ">{page.title}</h6>
                            {/* <p className="text-lg">
                                Schedule your complimtary 1 on 1 strategy session plus a step-by-step 7-week action plan showing you exactly you can capture miss oppertunities and enroll more students.
                            </p> */}
                        </div>
                        <div id="schdeduler" className="shadow-sm">
                            <iframe
                                src={`https://api.mymonstro.com/widget/booking/${page.calendarId}`}
                                style={{ width: "100%", height: "100%", border: 'none', overflow: "hidden" }}
                                id={page.uid} className="overflow-hidden"></iframe>
                            <Script src="https://api.mymonstro.com/js/form_embed.js" strategy="afterInteractive" type="text/javascript" />
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

