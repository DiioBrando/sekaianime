import {z} from "zod";

export const SignUpFormSchema = z.object({
    login: z.string().min(2).max(15).regex(/^[A-Za-zА-Яа-яЁё\s\-]+$/),
    name: z.string().min(2).max(15).regex(/^[A-Za-zА-Яа-яЁё\s\-]+$/),
    email: z.string().max(256).email(),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
    agreements: z.boolean().refine(val => val),
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
});

export const SignInFormSchema = z.object({
    login: z.string().min(2),
    password: z.string().min(8),
    agreements: z.boolean().refine(val => val),
});

export const ForgotPasswordSchema = z.object({
    sendMail: z.string().max(256).email(),
});

export const ResetPasswordSchema = z.object({
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
});

export const OTPSchema = z.object({
    pin: z.string().min(6),
});

export type ForgotPasswordValues = z.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordValues = z.infer<typeof ResetPasswordSchema>;
export type OTPValues = z.infer<typeof OTPSchema>;
export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;
export type SignInFormValues = z.infer<typeof SignInFormSchema>;