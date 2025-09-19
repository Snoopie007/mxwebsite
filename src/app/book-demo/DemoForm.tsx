"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    RadioGroup,
    RadioGroupItem,
    Input,
} from "@/components/forms";
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Contact } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn, sleep } from "@/libs/utils";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import { getCookie } from 'cookies-next';
import { Progress } from '@/components/ui';

import { DemoFormSchema } from "@/libs/FormSchemas";

import { Industries } from "@/libs/data";

const InputStyle = "h-14 px-6 border border-gray-200 rounded-md text-black text-base";
const HeadlineStyle = "md:text-4xl text-3xl text-center font-poppins leading-[2rem] text-black font-bold"



const Challenges = [
    { name: "Need better payment management", description: "Managing memberships is chaotic and disorganized." },
    { name: "Improve member experience", description: "Members are not engaged and not coming back." },
    { name: "Increase retention rate", description: "Need to improve member retention and reduce churn." },
    { name: "Generate more referrals", description: "Want to increase member referrals and word-of-mouth marketing." },
    { name: "Need better reporting", description: "Need to improve reporting and analytics." },
]


export default function BookDemoForm() {

    const [step, setStep] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { push } = useRouter();

    const form = useForm<z.infer<typeof DemoFormSchema>>({
        resolver: zodResolver(DemoFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            challenge: "",
            niche: "",
            email: "",
            phone: ""
        },
        mode: "onChange",
    })

    async function submitForm(v: z.infer<typeof DemoFormSchema>) {

        const newContact: Contact = {
            firstName: v.firstName,
            lastName: v.lastName,
            email: v.email,
            phone: v.phone,
            customFields: {
                challenge: v.challenge,
                niche: v.niche,
            }
        }
        const fbp = getCookie("_fbp");
        const fbc = getCookie("_fbc") || `fb.1.${+new Date()}.${searchParams.get("fbclid")}`;

        const ignoreList = ["fbclid", "email", "phone", "firstName", "lastName"];
        searchParams.forEach((v, k) => {
            if (ignoreList.includes(k)) return
            newContact.customFields[k] = v
        })

        setLoading(true);
        try {
            const res = await fetch('/api/leads', {
                method: "post",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    contact: newContact,
                    fb: {
                        fbp: fbp,
                        fbc: fbc,
                        pathname: pathname
                    }
                }),
            })
            sleep(2000);
            setLoading(false)

            const url = '/book-demo/schedule/demo';
            window.dataLayer.push({ event: 'New Lead' });
            push(`${url}?email=${v.email}&phone=${v.phone}&firstName=${v.firstName}&lastName=${v.lastName}`)
        } catch (e: any) {
            setLoading(false)
            toast.error("Something went wrong please try again.", { position: "top-center", hideProgressBar: true, closeOnClick: true });
        }
    }



    return (
        <>
            <ToastContainer />
            <div className="mb-10 max-w-md m-auto">
                <Progress value={((step / 4) * 100)} className="w-full h-1.5  bg-gray-200 rounded-[10px]" />
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitForm)} >
                    <fieldset className={cn("hidden", (step === 1 && "block"))}>
                        <div className="mb-12">
                            <div className={HeadlineStyle}>Tell us how you plan to use Monstro?</div>
                        </div>
                        <FormField
                            control={form.control}
                            name="challenge"
                            render={({ field }) => (
                                <FormItem className="">

                                    <FormControl >
                                        <RadioGroup
                                            onValueChange={(value) => {
                                                window.dataLayer.push({ event: 'SurveyPagePurpose' });
                                                field.onChange(value)
                                                setStep(2)
                                            }}
                                            defaultValue={field.value}
                                            className="grid max-w-lg m-auto gap-4"
                                        >
                                            {Challenges.map((c) => (

                                                <FormItem key={c.name}>
                                                    <FormLabel
                                                        className="h-full max-h-[100px] cursor-pointer flex flex-row hover:border-black border-2 border-transparent  shadow-md rounded-md  bg-white p-4 ">
                                                        <FormControl className="mr-3">
                                                            <RadioGroupItem value={c.name} className="border-gray-200 border-2 " />
                                                        </FormControl>
                                                        <div className="text-left">
                                                            <span className="font-bold text-base block leading-none ">{c.name}</span>
                                                            <p className=" mt-1 text-gray-500 text-sm">{c.description}</p>
                                                        </div>
                                                    </FormLabel>
                                                </FormItem>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </fieldset>
                    <fieldset className={cn("max-w-xl hidden text-left m-auto", (step === 2 && "block"))}>
                        <div className="mb-12">
                            <div className={HeadlineStyle}>What kind of group classes do you offer?</div>
                        </div>
                        <FormField
                            control={form.control}
                            name="niche"
                            render={({ field }) => (
                                <FormItem className="">

                                    <FormControl >
                                        <RadioGroup
                                            onValueChange={(value) => {
                                                window.dataLayer.push({ event: 'SurveyPageNiche' });

                                                field.onChange(value)
                                                setStep(3)
                                            }}
                                            defaultValue={field.value}
                                            className="grid grid-cols-2 max-w-lg m-auto gap-4"
                                        >
                                            {Industries.map((v, i) => (

                                                <FormItem key={v + i}>
                                                    <FormLabel
                                                        className="h-full max-h-[100px] cursor-pointer flex flex-row hover:border-black border-2 border-transparent  shadow-md rounded-md  bg-white p-4 ">
                                                        <FormControl className="mr-3">
                                                            <RadioGroupItem value={v} className="border-gray-200 border-2 " />
                                                        </FormControl>
                                                        <div className="text-left">
                                                            <span className="font-bold text-base block leading-none ">{v}</span>

                                                        </div>
                                                    </FormLabel>
                                                </FormItem>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </fieldset>
                    <fieldset className={cn("max-w-md hidden text-left m-auto", (step === 3 && "block"))}>
                        <div className="mb-12">
                            <div className={HeadlineStyle}>Tell us who this demo is for?</div>
                        </div>
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormControl>
                                        <Input type='text' className={cn(InputStyle)} placeholder="First name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormControl>
                                        <Input type='text' className={cn(InputStyle)} placeholder="Last name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormControl >
                                        <Input type='email' className={cn(InputStyle)} placeholder="Your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field: { onChange, value } }) => (
                                <FormItem className="mb-4">
                                    <FormControl>
                                        <PhoneInput
                                            containerClass={cn("phoneInput", InputStyle, "pl-0")}
                                            inputClass={"!text-base"}
                                            value={value}
                                            onChange={onChange}
                                            country="us"
                                            onlyCountries={["us", "ca", 'gb', "au"]}

                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />

                        <Button type='submit'
                            disabled={loading}
                            className={cn(
                                "w-full children:hidden py-6 rounded-md hover:bg-white text-base font-bold uppercase",
                                (loading && "children:inline-block")
                            )}>
                            <Loader2 className="mr-2 size-4 animate-spin" />
                            NEXT
                        </Button>


                        <p className=' text-base text-center font-normal text-gray-600 mt-2 mb-4 block'>
                            By subscribing to Monstro, you acknowledge and agree to our
                            <a href="/legal/privacy-policy" className='text-base'> Privacy Policy</a>, and opt-in to receive additional email and SMS from Monstro.
                        </p>

                    </fieldset>


                </form >
            </Form >
        </>


    )
}
