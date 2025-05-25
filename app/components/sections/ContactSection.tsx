import Section from "@/app/components/global/Section";
import Image from "next/image";
import bgOvals from "@/public/images/bg-ovals.svg";
import Form from "next/form";
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";

const ContactSection = () => {

    const sendContactForm = async (formData: FormData) => {
        'use server'

        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

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

    return (
        <Section
            sectionClass='pt-lg pb-lg bg-grey-dark'
            innerClass={'relative'}
            title={'Contact'}
        >
                <Image
                    className='absolute top-20 -left-24'
                    src={bgOvals}
                    alt={'background ovals'}
                />

                <div className="flex flex-col lg:grid grid-cols-2 gap-12">
                    <p>I would love to hear from you if you are interested in us working together. Please fill in the form and I will get back to you as soon as possible.</p>

                    <Form
                     action={sendContactForm}
                    className={"flex flex-col gap-10"}
                    >
                        <FormInput
                            type={'text'}
                            id={'name'}
                            name={'name'}
                            error={""}
                        />
                        <FormInput
                            type={'email'}
                            id={'email'}
                            name={'email'}
                            error={""}
                        />
                        <FormInput
                            type={'textarea'}
                            id={'message'}
                            name={'message'}
                            error={""}
                        />

                        <div className="flex justify-end pt-6">
                            <Button
                                type='submit'
                            >send message
                            </Button>
                        </div>
                    </Form>
                </div>
        </Section>
    )
}

export default ContactSection;