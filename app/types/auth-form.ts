export type AuthFormState = {
    success: boolean | null;
    errors?: {
        password?: string;
    };
}