'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Section from "@/app/components/global/Section";
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import { authenticate } from "@/app/actions/admin";
import Form from "next/form";
import type {AuthFormState} from "@/app/types/auth-form";

const AdminPage = () => {

    const initialState = { success: null, errors: {} };

    const [state, formAction] = useActionState<AuthFormState, FormData>(authenticate, initialState);

    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            router.push('/admin/content');
        }
    }, [state.success, router]);

    return (
        <Section
            sectionClass='flex flex-grow items-center'
            innerClass='flex flex-col justify-center'
        >
            <Form action={formAction} className={"flex flex-col gap-10 w-full max-w-md"}>
                <FormInput
                    type={'password'}
                    id={'password'}
                    name={'password'}
                    error={state.errors?.password ?? ""}
                />
                <div className="flex justify-end pt-6">
                    <Button
                        type='submit'
                    >Login
                    </Button>
                </div>
            </Form>
        </Section>
    );
};

export default AdminPage;