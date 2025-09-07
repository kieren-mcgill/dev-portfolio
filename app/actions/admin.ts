'use server';

import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import type {AuthFormState} from "@/app/types/auth-form";

export async function authenticate(prevState: AuthFormState, formData: FormData) {
    const password = formData.get('password');

    if (password === process.env.ADMIN_PASSWORD) {
        const token = sign({ user: 'admin' }, process.env.JWT_SECRET || 'default-secret', { expiresIn: '1h' });
        // Use the alternative syntax for setting the cookie
        (await cookies()).set('auth_jwt', token, { httpOnly: true, maxAge: 3600 });
        return { success: true, errors: {} };
    } else {
        return { success: false, errors: { password: 'Incorrect password.' } };
    }
}