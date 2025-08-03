'use server';

import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function verifyAuthToken() {
    const token = (await cookies() as any).get('auth_jwt')?.value;

    if (!token) {
        return { isValid: false, error: 'No token found' };
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET || 'default-secret');
        return { isValid: true, decoded };
    } catch (error) {
        return { isValid: false, error: 'Invalid token' };
    }
}
