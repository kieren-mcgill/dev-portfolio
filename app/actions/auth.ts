'use server';

import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function verifyAuthToken() {
    const token = (await cookies()).get('auth_jwt')?.value;

    if (!token) {
        return { isValid: false };
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET || 'default-secret');
        return { isValid: true, decoded };
    } catch {
        return { isValid: false };
    }
}
