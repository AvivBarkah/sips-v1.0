
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This page is deprecated and now handled by a sheet in the parent dashboard.
// This component redirects users to the parent dashboard.
export default function DeprecatedPermissionFormPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/dashboard/parent');
    }, [router]);

    return (
        <div className="flex h-screen items-center justify-center">
            <p>Mengarahkan kembali ke dasbor...</p>
        </div>
    );
}

    