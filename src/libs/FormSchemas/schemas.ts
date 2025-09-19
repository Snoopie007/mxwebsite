
import * as z from "zod";

export const EmailSchema = z.object({
    email: z.string()
        .trim()
        .min(5, "Email is too short")
        .max(254, "Email is too long")
        .email("Invalid email address")
        .refine(email => email.includes("."), {
            message: "Email must contain a domain extension"
        }),
});



export const ContactFormSchema = z.object({
    firstName: z.string().min(2, { message: "Required" }),
    lastName: z.string().min(2, { message: "Required" }),
    phone: z.string().min(11, { message: 'Invalid phone number' }),
    email: z.string().email("Invalid email"),
    category: z.string().min(2, { message: "Required" }),
    message: z.string().min(10, { message: "Required" })
})



export const DemoFormSchema = z.object({
    firstName: z.string().min(2, "Required"),
    lastName: z.string().min(2, "Required"),
    phone: z.string().min(11, { message: 'Invalid phone number' }),
    email: z.string().email("Invalid email"),
    niche: z.string(),
    challenge: z.string(),
})

