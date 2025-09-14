"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Input,
} from "@/components/forms";
import { ContactFormSchema } from '@/libs/FormSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn, sleep } from "@/libs/utils";
import { Button } from "@/components/ui";
import { Loader2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const InputStyle = "py-6 px-4 border rounded-[4px] border-gray-300 text-black text-base"


export default function ContactForm() {


    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            category: "",
            message: ""
        },
        mode: "onChange",
    })

    async function submitForm(v: z.infer<typeof ContactFormSchema>) {
        const newContact = {
            firstName: v.firstName,
            lastName: v.lastName,
            email: v.email,
            phone: v.phone,
            customField: {
                contact_category: v.category,
                contact_message: v.message
            }
        }
        setLoading(true);
        try {
            await fetch('/api/contact', {
                method: "post",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    contact: newContact
                }),
            })
            sleep(2000);
            setLoading(false)
            toast.success("Message sent successfully.", { position: "top-center", hideProgressBar: true, closeOnClick: true });
        } catch (e: any) {
            toast.error("Something went wrong please try again.", { position: "top-center", hideProgressBar: true, closeOnClick: true });
            setLoading(false)
        }
    }

    function formatPhone(e: React.KeyboardEvent<HTMLInputElement>): void {
        let rawPhoneNumber = e.currentTarget.value;
        if (e.key !== 'Backspace') {
            form.setValue('phone', rawPhoneNumber);
            form.trigger()
        }
    }

    return (
        <div className="border-r bg-white px-6 py-8 rounded-sm">

            <ToastContainer />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitForm)} >

                    <fieldset className="flex flex-row items-center gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="mb-4 flex-1">
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
                                <FormItem className="mb-4 flex-1">
                                    <FormControl>
                                        <Input type='text' className={cn(InputStyle)} placeholder="Last name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                    </fieldset>
                    <fieldset>
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
                    </fieldset>
                    <fieldset>
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>

                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className={cn(InputStyle, 'mb-4')}>
                                            <SelectValue placeholder="How can we help?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>

                                                {["Support", "Question", "Sales", "Other"].map((item, index) => (
                                                    <SelectItem key={index} value={item}>{item}</SelectItem>
                                                ))}



                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </fieldset>
                    <fieldset>
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormControl onKeyUp={formatPhone}>
                                        <Input type='text' className={cn(InputStyle)} placeholder="Your mobile number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </fieldset>
                    <fieldset>
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="mb-4">

                                    <FormControl >
                                        <textarea className={cn(InputStyle, "w-full rounded-sm py-3 min-h-[150px]")} placeholder="Tell us what you need help with." {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>

                            )}
                        />

                        <Button type='submit'
                            disabled={loading}
                            className={cn(" children:hidden py-5 text-sm hover:bg-white hover:text-black  font-bold uppercase border-2 border-black", (loading && "children:inline-block"))}>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Send Message
                        </Button>


                        <p className='legal text-base  font-normal mt-2 mb-4 block'>
                            By sending this message, you agree to Monstro's
                            <a href="/legal/privacy-policy" className='text-sm'>Privacy Policy</a>, and opt-in to receive additional email and SMS from Monstro.
                        </p>

                    </fieldset>


                </form >
            </Form >
        </div>



    )
}
