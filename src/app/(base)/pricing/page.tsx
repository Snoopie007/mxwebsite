
// import Faq from "@/components/sections/faq";

import Link from "next/link";
import Faqs from "./components/faqs";
import PricingTable from "./components/PricingTable";

const FAQS = [
    {
        q: "What makes Monstro-X different from other member management software?",
        a: "Unlike most membership software, Monstro-X combines powerful automation tools with built-in gamification, community features, and AI support—all designed to increase member engagement and retention. It's more than just tracking attendance or payments—it's a full engagement system."
    },
    {
        q: "How does the Pay-As-You-Go plan work?",
        a: "This flexible option charges 2% per transaction, with no monthly subscription. You choose whether the fee is paid by your school or passed on to your members. It's a great way to get started with Monstro-X membership software without any upfront cost."
    },
    {
        q: "What's the difference between the $99 and $299 monthly plans?",
        a: "Both monthly plans give you full access to the Monstro-X member management system, including gamification, unlimited users, and the white-labeled CRM.\n\nThe key difference:\n\n**$99/month:** Includes all features + 2% transaction fee\n\n**$299/month:** Includes all features + no transaction fees\n\nIf your school processes more than $15,000/month, the $299 plan is typically more cost-effective."
    },
    {
        q: "Is there a contract or setup fee to use your membership software?",
        a: "No. All plans are contract-free, with no setup or onboarding fees. You can cancel or change your plan at the end of any 4-week billing cycle."
    },
    {
        q: "Can I switch plans later?",
        a: "Yes! You can upgrade or downgrade your plan anytime at the end of your current billing cycle."
    },
    {
        q: "What's included in all plans?",
        a: "Every Monstro-X membership software plan includes:\n\n- Full gamification engine (points, rewards, streaks, leaderboards)\n- Community chat and posts to build member connection\n- Built-in AI assistant for billing, hours, and FAQs\n- Unlimited members and staff accounts\n- White-labeled CRM (GoHighLevel)\n- Integration with Stripe for payment processing"
    },
    {
        q: "Is the CRM branded as Monstro-X?",
        a: "No. The CRM is fully white-labeled and appears under your school's brand, not ours."
    },
    {
        q: "Is Monstro-X membership software good for martial arts, music, or fitness schools?",
        a: "Yes. Monstro-X was built specifically for group-class businesses like martial arts academies, dance studios, music schools, and fitness gyms. It's not generic—it's designed to boost retention and referrals in community-based programs."
    },
    {
        q: "Does Monstro-X support unlimited members?",
        a: "Yes! All plans include unlimited members, unlimited staff, and unlimited use of all features."
    },
    {
        q: "Can I get a refund if I cancel?",
        a: "We do not offer refunds. However, you can cancel any time before your next billing cycle to avoid future charges."
    }
]

export default async function Pricing() {


    return (
        <main id="pricing">
            <section className="  bg-gradient-to-b py-16  from-transparent to-slate-100 relative">
                <div className="mx-auto max-w-4xl  text-center">
                    <h1 className=" font-poppins">
                        Plans and Pricing
                    </h1>
                    <p className="text-xl leading-8 text-gray-700 mb-5">
                        Choose the plan that's right for you.
                    </p>
                    <PricingTable />
                </div>

            </section>

            <Faqs faqs={FAQS} />

        </main >
    )
}
