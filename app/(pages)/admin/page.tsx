'use client';

import { useActionState } from 'react';
import Section from "@/app/components/global/Section";
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import { authenticate } from "@/app/actions/admin";

const AdminPage = () => {
    const initialState = { success: null, errors: {} };
    const [state, formAction] = useActionState(authenticate, initialState);

    return (
        <Section
            sectionClass='flex-grow'
            innerClass='flex flex-col justify-center items-center'
            title={'Admin Login'}
        >
            <form action={formAction} className={"flex flex-col gap-10 w-full max-w-md"}>
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
            </form>
        </Section>
    );
};

export default AdminPage;