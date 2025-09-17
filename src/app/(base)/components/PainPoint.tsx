import { cn } from "@/libs/utils";
import Image from "next/image";

const CommonProblems = [
    {
        title: "No Motivation to Stay Consistent",
        description: "Most platforms only track attendance — they don't incentivize it. Members have no reason to keep showing up when life gets busy.",
    },
    {
        title: "Lack of Real-Time Engagement",
        description: "Once someone checks in or completes a class, the experience ends. No community, no feedback loops, no excitement between sessions.",
    },

    {
        title: "No Built-In Retention Engine",
        description: "They're designed for management, not momentum. There's no system that rewards loyalty, recognizes effort, or drives referrals.",
    },


]

const MonstroSolutions = [
    {
        title: "Points-Based Progress System",
        description: "Monstro‑X rewards members for every meaningful action—checking in, completing profiles, cheering others on, or posting wins. It's like XP for showing up.",
    },
    {
        title: "Community-Powered Gamification",
        description: "With leaderboards, shoutouts, and chat engagement, members feel like part of something bigger. That emotional connection boosts long-term commitment.",
    },
    {
        title: "Built-In Rewards & Recognition",
        description: "From guest passes to private lessons, Monstro‑X turns effort into real perks—without extra work for your staff. Members stay loyal because the app makes them feel seen.",
    },
]

export function PainPoint() {
    return (
        <section className={cn("relative py-12 lg:py-24 px-5 lg:px-0  md:py-36")}>
            <div className="max-w-6xl mx-auto space-y-12 ">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className={cn('text-3xl font-bold  ')}>
                        Why Most Member Management Software Fails to Reduce Churn
                    </h2>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex-1 bg-gray-100 p-10 rounded-lg text-black">

                        <ul className="space-y-6">
                            {CommonProblems.map((painPoint, index) => (
                                <li key={index} className="flex flex-col gap-2">
                                    <div className={cn('text-lg font-bold')}>{painPoint.title}</div>
                                    <p className="text-gray-500">{painPoint.description}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="flex-1 p-10 bg-indigo-500 rounded-lg text-white">
                        <ul className="space-y-6">
                            {MonstroSolutions.map((solution, index) => (
                                <li key={index} className="flex flex-col gap-2">
                                    <div className={cn('text-lg font-bold')}>{solution.title}</div>
                                    <p className="text-gray-200">{solution.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}