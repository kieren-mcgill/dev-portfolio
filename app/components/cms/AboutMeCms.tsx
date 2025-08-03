'use client';

import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";
import { updateAboutMeData } from '@/app/actions/cms';

const AboutMeCms = ({ initialData }: { initialData: any }) => {
    return (
        <CmsSectionContainer title="About Me">
            <form className="flex flex-col gap-4" action={updateAboutMeData}>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <FormInput
                        type={'textarea'}
                        id={'aboutMeText'}
                        name={'aboutMeText'}
                        label={'About Me Text'}
                        isUppercase={false}
                        error={undefined}
                        defaultValue={initialData?.aboutMeText || ''}
                    />
                    <FormInput
                        type={'text'}
                        id={'profilePicUrl'}
                        name={'profilePicUrl'}
                        label={'Profile Picture URL'}
                        isUppercase={false}
                        error={undefined}
                        defaultValue={initialData?.profilePicUrl || ''}
                    />
                    <div className="col-span-full">
                        <h3 className="text-lg font-semibold mb-2">CV Button</h3>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <FormInput
                                type={'text'}
                                id={'cvButtonText'}
                                name={'cvButtonText'}
                                label={'CV Button Text'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={initialData?.cvButtonText || ''}
                            />
                            <FormInput
                                type={'text'}
                                id={'cvButtonPath'}
                                name={'cvButtonPath'}
                                label={'CV Button Path'}
                                isUppercase={false}
                                error={undefined}
                                defaultValue={initialData?.cvButtonPath || ''}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </CmsSectionContainer>
    );
};

export default AboutMeCms;
