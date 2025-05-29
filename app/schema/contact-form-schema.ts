import { z } from "zod/v4";

export const ContactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
