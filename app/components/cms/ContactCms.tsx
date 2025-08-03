import FormInput from "@/app/components/FormInput";
import Button from "@/app/components/global/Button";
import CmsSectionContainer from "@/app/components/cms/CmsSectionContainer";

const ContactCms = () => {
    return (
        <CmsSectionContainer title="Contact">
            <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <FormInput
                        type={'textarea'}
                        id={'contactIntroText'}
                        name={'contactIntroText'}
                        label={'Contact Introduction Text'}
                        isUppercase={false}
                        error={''}
                    />
                    {/* Add fields for background image if needed later */}
                </div>
                <div className="flex justify-end mt-4">
                    <Button type="submit">Save</Button>
                </div>
            </form>
        </CmsSectionContainer>
    );
};

export default ContactCms;
