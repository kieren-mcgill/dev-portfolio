'use client';

import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";
import { updateHeroData } from '@/app/actions/cms';
import Form from "next/form";
import { HeroData } from '@/app/types/cms';

const HeroCms = ({ initialData }: { initialData: HeroData | null }) => {

    return (
        <CmsSectionContainer title="Hero">
            <Form className="flex flex-col gap-4" action={updateHeroData}>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <FormInput
                        type={'text'}
                        id={'greeting'}
                        name={'greeting'}
                        label={'Greeting'}
                        isUppercase={false}
                        error={undefined}
                        defaultValue={initialData?.greeting || ''}
                    />
                    <FormInput
                        type={'text'}
                        id={'name'}
                        name={'name'}
                        label={'Name'}
                        isUppercase={false}
                        error={undefined}
                        defaultValue={initialData?.name || ''}
                    />
                    <FormInput
                        type={'textarea'}
                        id={'tagline'}
                        name={'tagline'}
                        label={'Tagline'}
                        isUppercase={false}
                        error={undefined}
                        defaultValue={initialData?.tagline || ''}
                    />
                    <div className="col-span-full">
                        <h3 className="h4 text-lg font-semibold mb-2">CTA Button</h3>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <FormInput
                                type={'text'}
                                id={'buttonText'}
                                name={'buttonText'}
                                label={'Button Text'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={initialData?.buttonText || ''}
                            />
                            <FormInput
                                type={'text'}
                                id={'buttonPath'}
                                name={'buttonPath'}
                                label={'Button Path'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={initialData?.buttonPath || ''}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <Button type="submit">Save</Button>
                </div>
            </Form>
        </CmsSectionContainer>
    );
};

export default HeroCms;
