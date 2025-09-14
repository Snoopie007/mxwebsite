
import * as z from "zod";

const StandardContactInfo = z.object({
    firstName: z.string().min(2, { message: "Required" }),
    lastName: z.string().min(2, { message: "Required" }),
    phone: z.string().min(10, { message: 'Invalid phone number' }),

});

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


export const PasswordSchema = z.object({
    password: z.string().min(8, { message: "password must be atleast 8 characters long." }).refine(
        (v) => /[!@#$&]/.test(v), "password must contain atleast one symbol !@#$&*.")
        .refine((v) => /[A-Z]/.test(v), "password must contain atleast one UPPERCASE letter.")
        .refine((v) => /[0-9]/.test(v), "password must contain atleast one number.")
        .refine((v) => !/[()*+\-[\]{}|`~<>,.\/?^]/.test(v), "password contains invalid characters."),
});

export const RegisterSchema = z.object({
    firstName: z.string().min(2, "Required"),
    lastName: z.string().min(2, "Required"),
    phone: z.string().min(11, { message: 'Invalid phone number' }),
}).merge(PasswordSchema).merge(EmailSchema);


export const ContactFormSchema = z.object({

    category: z.string().min(2, { message: "Required" }),
    message: z.string().min(10, { message: "Required" })
}).merge(StandardContactInfo).merge(EmailSchema);

export const LoginSchema = z.object({
    token: z.string().min(6, "Invalid token."),
    type: z.enum(["email", "sms"]).optional(),
    email: z.string().min(8, "Email is required.").email("invalid email."),
    password: z.string().min(8, "Password is required."),
})



export const ResetPasswordSchema = z.object({
    token: z.string(),
    confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters long")
}).merge(PasswordSchema).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    }
);



