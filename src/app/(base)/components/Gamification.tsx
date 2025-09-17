import { cn } from "@/libs/utils";
import Image from "next/image";

const SolutionsPoints = [
    {
        title: "Gamification",
        description: "At the core of Monstro-X is gamification. Allowing your members track achievements and rewards to keep them engaged and coming back.",
        image: "/images/gamifcation.png",
    },

    {
        title: "Leaderboards",
        description: "Keep your members competitive and engaged with leaderboards. Allowing them to see how they stack up against others.",
        image: "/images/leaderboard.png",
    },
    {
        title: "Social & Community Building",
        description: `Monstro X app has built in social features to help your members connect with each other and 
        build a community through groups to increase engagement and retention even when they're not in the studio.`,
        image: "/images/social-community.png",
    },
    {
        title: "Easy Attendance System",
        description: "No more manual attendance tracking. Monstro-X app has a built in attendance allowing your members to easily check in and out of classes.",
        image: "/images/attendance.png",
    },

    {
        title: "Easily Get Referrals",
        description: "No more feeling awkward asking for referrals. Monstro-X allows your members to easily refer others to your business.",
        image: "/images/referrals.png",
    },
    {
        title: "AI Assistant Support",
        description: "Monstro-X uses AI to help your members with their questions and concerns. Allowing you to focus on growing your business.",
        image: "/images/ai-assistant.png",
    },
    {
        title: "Analytics & Reports",
        description: "Monstro-X app has a built in analytics allowing you to know exactly how to improve your business.",
        image: "/images/reports.png",
    }

]

export function Gamification() {
    return (
        <section className={cn("relative py-12 lg:py-24 px-5 lg:px-0  md:py-36 ")}>

            <div className="max-w-6xl mx-auto space-y-8 flex flex-col gap-4">

                <div className="text-center max-w-2xl mx-auto">
                    <h2 className={cn('text-3xl font-bold mb-4 ')}>
                        How Monstro-X Helps You Grow Your Business
                    </h2>
                    <p className={cn('text-lg text-muted-foreground')}>
                        Monstro-X uses proven behavioral psychology—not gimmicks—to help your members stay consistent,
                        competitive, and committed.
                    </p>


                </div>
                <div className=" relative w-full space-y-10 ">
                    {SolutionsPoints.map((solution, index) => (
                        <SolutionPoint key={index} solution={solution} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}


interface SolutionPointProps {
    solution: typeof SolutionsPoints[0];
    index: number;
}

function SolutionPoint({ solution, index }: SolutionPointProps) {
    return (
        <div className={cn('flex flex-row gap-14 items-center', index % 2 !== 0 && 'flex-row-reverse')}>
            <div className="flex-1">
                <Image src={solution.image} alt={solution.title} width={800} height={800} />
            </div>
            <div className={cn('flex-1 space-y-4 max-w-md', index % 2 !== 0 && 'text-right')}>
                <h3 className={cn('text-2xl font-bold')}>{solution.title}</h3>
                <p className={cn('text-lg text-muted-foreground')}>{solution.description}</p>
            </div>
        </div>
    )
}
