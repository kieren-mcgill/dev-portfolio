'use server';

import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function authenticate(prevState: any, formData: FormData) {
    const password = formData.get('password');

    if (password === process.env.ADMIN_PASSWORD) {
        const token = sign({ user: 'admin' }, process.env.JWT_SECRET || 'default-secret', { expiresIn: '1h' });
        (await cookies()).set({ name: 'token', value: token, httpOnly: true, maxAge: 3600 });
        return { success: true, errors: {} };
    } else {
        return { success: false, errors: { password: 'Incorrect password.' } };
    }
}