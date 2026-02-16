'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function StudentPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirection automatique vers le dashboard
        router.replace('/students/dashboard');
    }, [router]);

    return null;
}