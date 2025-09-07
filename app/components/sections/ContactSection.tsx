'use client'

import Section from "@/app/components/global/Section";
import Image from "next/image";
import bgOvals from "@/public/images/bg-ovals.svg";
import Form from "next/form";
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import {sendContactForm} from "@/app/actions/contact";
import {useActionState} from "react";
import {ContactFormState} from "@/app/types/contact-form";


const ContactSection = () => {

    const initialState = { success: null, errors: {} };

    const [state, formAction ] = useActionState<ContactFormState, FormData>(sendContactForm, initialState);

    return (
        <Section
            id={'contact'}
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
                    action={formAction}
                    className={"flex flex-col gap-10"}
                >
                    <FormInput
                        type={'text'}
                        id={'name'}
                        name={'name'}
                        error={state.errors?.name ?? ""}
                    />
                    <FormInput
                        type={'email'}
                        id={'email'}
                        name={'email'}
                        error={state.errors?.email ?? ""}
                    />
                    <FormInput
                        type={'textarea'}
                        id={'message'}
                        name={'message'}
                        error={state.errors?.message ?? ""}
                    />

                    <div className="flex justify-end pt-6">
                        <Button
                            type='submit'
                        >send message
                        </Button>
                        {state.success && (
                            <p className="text-green text-right mt-2 absolute top-full">Message sent successfully!</p>
                        )}
                    </div>

                </Form>
            </div>
        </Section>
    )
}

export default ContactSection;