"use client";
import { cn } from "@/libs/utils";
import { Plan } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";


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
    'Unlimited Members & Staff',
    "Member Mobile App",
]
const PLANS: Plan[] = [
    {
        id: 1,
        name: "Pay as you go",
        description: "Pay for what you use. 2% transaction fee.",
        features: BASE_FEATURES,
        cycle: "Month",
        price: 0,
    },
    {
        id: 2,
        name: "Marketing Plus",
        description: "Pay as you go + access to our Monstro Marketing Software.",
        features: BASE_FEATURES.concat(["Monstro Marketing Software"]),
        cycle: "Month",
        price: 99,
    },
    {
        id: 3,
        name: "Platinum",
        description: "No transaction fee. Access to all features.",
        features: BASE_FEATURES.concat(["Monstro Marketing Software"]),
        cycle: "Month",
        price: 299,
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
        <div className="space-y-4">
            <PricingToggle term={term} setTerm={setTerm} />
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

function PricingToggle({ term, setTerm }: { term: "Month" | "Annual", setTerm: (term: "Month" | "Annual") => void }) {
    return (
        <div className="relative flex flex-row items-center max-w-[200px] m-auto mb-10 bg-slate-200 rounded-md p-1">
            {/* Animated background slider */}
            <motion.div
                className="absolute top-1 bottom-1 w-1/2 bg-white rounded-sm shadow-sm"
                initial={false}
                animate={{
                    x: term === "Month" ? "0%" : "100%"
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }}
            />

            {/* Toggle buttons */}
            <div className="flex w-full flex-row relative z-10">
                <div
                    onClick={() => setTerm("Month")}
                    className="flex-1 py-2 px-4 cursor-pointer"
                >
                    <motion.p
                        className="text-center font-semibold"
                        animate={{
                            opacity: term === "Month" ? 1 : 0.6
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        Monthly
                    </motion.p>
                </div>
                <div
                    onClick={() => setTerm("Annual")}
                    className="flex-1 py-2 px-4 cursor-pointer"
                >
                    <motion.p
                        className="text-center font-semibold"
                        animate={{
                            opacity: term === "Annual" ? 1 : 0.6
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        Annually
                    </motion.p>
                </div>
            </div>
        </div>
    );
}