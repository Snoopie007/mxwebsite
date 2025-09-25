"use client";
import { cn } from "@/libs/utils";
import { Plan } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";


const BASE_FEATURES = [
    "Membership Management",
    "Class & Schedule Management",
    "Billing Management",
    "Community & Groups",
    "Live & AI Assistant Support",
    "Attendance Tracking",
    "Leaderboards",
    "Automated Reminders",
    "Gamification",
    "Analytics & Reports",
    "Member Mobile App",
]
const PLANS: Plan[] = [
    {
        id: 1,
        name: "Pay as you go",
        description: "Pay for what you use. 2% transaction fee.",
        features: BASE_FEATURES,
        cycle: "Month",
        order: 1,
        price: 0,
        setup: 0,
        trial: 0,
    },
    {
        id: 2,
        name: "Marketing Plus",
        description: "Pay as you go + access to our Monstro Marketing Software.",
        features: BASE_FEATURES.concat(["Monstro Marketing Software"]),
        cycle: "Month",
        order: 2,
        price: 99,
        setup: 0,
        trial: 0,
    },
    {
        id: 3,
        name: "Platinum",
        description: "No transaction fee. Access to all features.",
        features: BASE_FEATURES.concat([" Monstro Marketing Software"]),
        cycle: "Month",
        order: 3,
        price: 299,
        setup: 0,
        trial: 0,
    },
]
export default function PricingTable() {
    const [term, setTerm] = useState<"Month" | "Annual">("Month");

    function calcPrice(price: number) {
        if (term === "Month") {
            return price;
        } else {
            return Math.round((price * 10) / 12);
        }
    }


    return (
        <div>
            <div className="pricingToggle box-content relative flex flex-row items-center justify-between max-w-[200px] m-auto mb-10 bg-slate-200 rounded-md">
                <div className="flex w-full  flex-row z-10">
                    <div onClick={() => {
                        setTerm("Month");
                    }}
                        className={cn(
                            "toggleBox ",
                            term === "Month" && "active"
                        )}
                    >
                        <p className="opacity-30 text-center z-10 font-semibold">
                            Monthly
                        </p>
                    </div>
                    <div
                        onClick={() => {
                            setTerm("Annual");
                        }}
                        className={cn(
                            "toggleBox ",
                            term === "Annual" && "active"
                        )}
                    >
                        <p
                            className="opacity-30 text-center z-10 font-semibold"
                            data-term="annual"
                        >
                            Annually
                        </p>
                    </div>
                </div>
                <div className={cn(
                    "toggle ",
                    term === "Month" ? "left" : "right"
                )} >

                </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
                {PLANS.map((plan) => (
                    <div key={plan.id} className="border p-6 bg-white rounded-sm">
                        <div className="mb-6 text-left space-y-2">
                            <div className="text-indigo-500 text-xl font-semibold">{plan.name}</div>
                            <p className=" text-left text-base">
                                {plan.description}
                            </p>
                        </div>
                        <div className="price flex flex-row align-middle items-center mb-5">
                            <div className="leading-none">
                                <span className="superscript">$</span>
                                <span className="text-5xl leading-none font-poppins font-black">
                                    {calcPrice(plan.price)}
                                </span>
                            </div>
                            <div className="ml-1  text-gray-800">
                                <span className="block text-base leading-none">
                                    USD
                                </span>
                                <span className="text-base leading-none lowercase">
                                    /{term}
                                </span>
                            </div>
                        </div>
                        <div className="pt-6 pb-10 border-t border-gray-100">
                            <ul className='space-y-4'>
                                {plan.features.map((v, i) => (
                                    <li key={i} className="flex flex-row items-center gap-2">
                                        <FaCheckCircle size={20} />
                                        <span className="text-sm ">{v}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
