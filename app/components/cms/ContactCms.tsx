'use client';

import { useActionState } from 'react';
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";
import Form from "next/form";
import { CmsDataState } from '@/app/types/cms';
import { updateContactData } from '@/app/actions/cms';

const initialState: CmsDataState = {
    success: null,
    error: undefined,
};

const ContactCms = () => {
    const [state, formAction] = useActionState<CmsDataState, FormData>(
        updateContactData,
        initialState
    );
    return (
        <CmsSectionContainer title="Contact">
            <Form className="flex flex-col gap-4" action={formAction}>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <FormInput
                        type={'textarea'}
                        id={'contactIntroText'}
                        name={'contactIntroText'}
                        label={'Contact Introduction Text'}
                        isUppercase={false}
                        error={undefined}
                    />
                    {/* Add fields for background image if needed later */}
                </div>
                {state.success !== null && (
                    <p className={`p-4 rounded-md ${state.success ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                        {state.success ? 'Data updated successfully!' : `Error: ${state.error}`}
                    </p>
                )}
                <div className="flex justify-end mt-4">
                    <Button type="submit">Save</Button>
                </div>
            </Form>
        </CmsSectionContainer>
    );
};

export default ContactCms;
