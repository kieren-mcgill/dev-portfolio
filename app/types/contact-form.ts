
export type ContactFormState = {
    success: boolean | null;
    errors?: {
        name?: string;
        email?: string;
        message?: string;
    };
};