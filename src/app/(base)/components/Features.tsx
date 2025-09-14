import { cn } from "@/libs/utils";
import {
    CreditCardIcon,
    CalendarCheck2Icon,
    BotMessageSquare,
    ChartPieIcon,
    TrophyIcon,
    WorkflowIcon,
    BookOpenCheckIcon,
    UserRoundPlus,
    GroupIcon,
    PhoneIcon,
    BellRingIcon
} from "lucide-react";
const AllFeatures = [
    {
        icon: <UserRoundPlus />,
        title: "Subscription Management",
        description: "Manage your members' subscriptions and billing details.",
    },
    {
        icon: <CreditCardIcon />,
        title: "Payment Management",
        description: "Manage your members' payments and billing details.",
    },
    {
        icon: <BotMessageSquare />,
        title: "AI Assistant Support",
        description: "Get AI-powered support for your members.",
    },
    {
        icon: <CalendarCheck2Icon />,
        title: "Class & Schedule Management",
        description: "Manage your members' class and schedule details.",
    },
    {
        icon: <BookOpenCheckIcon />,
        title: "Attendance Tracking",
        description: "Track member attendance and participation.",
    },
    {
        icon: <BellRingIcon />,
        title: "Automated Reminders",
        description: "Send automatic reminders to keep members engaged.",
    },
    {
        icon: <TrophyIcon />,
        title: "Achievement & Rewards",
        description: "Gamify the experience with achievements and rewards.",
    },
    {
        icon: <ChartPieIcon />,
        title: "Member Reports",
        description: "Get a detailed report of your members' activity and progress.",
    },
    {
        icon: <GroupIcon />,
        title: "Community & Groups",
        description: "Build a community with groups and allow your members to connect with each other.",
    },
    {
        icon: <PhoneIcon />,
        title: "Mobile App",
        description: "Keep your members engaged and coming back with a mobile app.",
    },
    {
        icon: <WorkflowIcon />,
        title: "Workflows & Automation",
        description: "Automate processes with custom workflows and automation.",
    }
];

export function Features() {
    return (
        <section className={cn("relative py-12 lg:py-24 px-5 lg:px-0  md:py-36")}>
            <div className="max-w-6xl mx-auto space-y-14">
                <div className="text-center max-w-2xl mx-auto">
                    <div className="space-y-4">
                        <span className="font-bold text-muted-foreground">Tools & Features</span>
                        <h2 className={cn('text-4xl font-bold')}>
                            Every tool your team needs to keep members coming back.
                        </h2>
                    </div>

                </div>

                <div className="grid md:grid-cols-4  gap-4">
                    {AllFeatures.map((feature, index) => (
                        <div key={index} className="border border-gray-200 shadow-xs py-6 px-4  bg-white rounded-lg">
                            <div className="flex justify-start flex-col items-center space-y-6">
                                <div className="size-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div className="flex  text-center flex-col gap-2">
                                    <div className="text-base font-bold">{feature.title}</div>
                                    <p className="text-gray-500 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}