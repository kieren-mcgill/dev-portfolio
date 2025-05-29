'use server'

import {ContactFormSchema} from "@/app/schema/contact-form-schema";
import {z} from "zod/v4";
import {ContactFormState} from "@/app/types/contact-form-type";

export const sendContactForm = async (
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> => {

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const parsed = ContactFormSchema.safeParse({ name, email, message });

    if (!parsed.success) {

        const errorTree = z.treeifyError(parsed.error);

        const fieldErrors = Object.fromEntries(
            Object.entries(errorTree.properties).map(([key, val]) => [
                key,
                val.errors?.[0] ?? '',
            ])
        );

        return {
            success: false,
            errors: fieldErrors as ContactFormState["errors"],
        }
    }

    const mailjet = require('node-mailjet').apiConnect(
        process.env.MAILJET_PUBLIC_KEY!,
        process.env.MAILJET_SECRET_KEY!
    );

    try {
        const request = await mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: 'no-reply@kierenmcgill.co.uk',
                        Name: 'Kieren Portfolio',
                    },
                    To: [
                        {
                            Email: 'kacmcgill@gmail.com',
                            Name: 'Kieren McGill',
                        },
                    ],
                    Subject: 'New contact form submission',
                    TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                    HTMLPart: `<h3>New contact request</h3><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
                },
            ],
        });
        return { success: true };
    } catch (err) {
        console.error('Email send failed:', err);
        return { success: false };
    }
}