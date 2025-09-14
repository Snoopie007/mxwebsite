import { cn } from "@/libs/utils";
import Image from "next/image";

const CommonProblems = [
    {
        title: "Lack of engagement",
        description: "Most member management software are made for gyms and studios, but not to keep your members engaged and coming back.",
    },
    {
        title: "Inefficient Billing System",
        description: "Most member management software fails to reduce churn because they don't understand the root cause of churn.",
    },

    {
        title: "Messy Class Schedule Management",
        description: "Most member management software fails to reduce churn because they don't understand the root cause of churn.",
    },


]

const MonstroSolutions = [
    {
        title: "Gamification",
        description: "Monstro-X uses gamification to keep your members engaged and coming back . Allowing your members to track their achievements and rewards.",
    },
    {
        title: "AI Assistant Support",
        description: "Monstro-X uses AI to help your members with their questions and concerns. ",
    },
    {
        title: "Community & Groups",
        description: "Build a community with groups and allow your members to connect with each other.",
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