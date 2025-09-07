'use client';

import { useActionState } from 'react';
import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";
import { updateHeaderData } from '@/app/actions/cms';
import Form from "next/form";
import { HeaderData, CmsDataState } from '@/app/types/cms';

const initialState: CmsDataState = {
    success: null,
    error: undefined,
};

const HeaderCms = ({ initialData }: { initialData: HeaderData | null }) => {
    const [state, formAction] = useActionState<CmsDataState, FormData>(
        updateHeaderData,
        initialState
    );

    return (
        <CmsSectionContainer title="Header">
            <Form className="flex flex-col gap-4" action={formAction}>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <FormInput
                        type={'text'}
                        id={'siteTitle'}
                        name={'siteTitle'}
                        label={'Site Title'}
                        isUppercase={false}
                        error={undefined}
                        defaultValue={initialData?.siteTitle || ''}
                    />
                    <FormInput
                        type={'text'}
                        id={'githubLink'}
                        name={'githubLink'}
                        label={'GitHub Link'}
                        isUppercase={false}
                        error={undefined}
                        defaultValue={initialData?.githubLink || ''}
                    />
                    <FormInput
                        type={'text'}
                        id={'linkedinLink'}
                        name={'linkedinLink'}
                        label={'LinkedIn Link'}
                        isUppercase={false}
                        error={undefined}
                        defaultValue={initialData?.linkedinLink || ''}
                    />
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

export default HeaderCms;

// 'use client';
//
// import FormInput from "@/app/components/FormInput";
// import Button from "@/app/components/global/Button";
// import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";
// import { updateHeaderData } from '@/app/actions/cms';
// import Form from "next/form";
// import { HeaderData } from '@/app/types/cms';
//
// const HeaderCms = ({ initialData }: { initialData: HeaderData | null }) => {
//
//     return (
//         <CmsSectionContainer title="Header">
//             <Form className="flex flex-col gap-4" action={updateHeaderData}>
//                 <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//                     <FormInput
//                         type={'text'}
//                         id={'siteTitle'}
//                         name={'siteTitle'}
//                         label={'Site Title'}
//                         isUppercase={false}
//                         error={undefined}
//                         defaultValue={initialData?.siteTitle || ''}
//                     />
//                     <FormInput
//                         type={'text'}
//                         id={'githubLink'}
//                         name={'githubLink'}
//                         label={'GitHub Link'}
//                         isUppercase={false}
//                         error={undefined}
//                         defaultValue={initialData?.githubLink || ''}
//                     />
//                     <FormInput
//                         type={'text'}
//                         id={'linkedinLink'}
//                         name={'linkedinLink'}
//                         label={'LinkedIn Link'}
//                         isUppercase={false}
//                         error={undefined}
//                         defaultValue={initialData?.linkedinLink || ''}
//                     />
//                 </div>
//                 <div className="flex justify-end mt-4">
//                     <Button type="submit">Save</Button>
//                 </div>
//             </Form>
//         </CmsSectionContainer>
//     );
// };
//
// export default HeaderCms;
