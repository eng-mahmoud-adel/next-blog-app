'use client';

import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface IPaginationContainer {
    page: number;
    totalPages: number;
}

const PaginationContainer = ({ page, totalPages }: IPaginationContainer) => {
    const router = useRouter();

    if (totalPages === 1) return null;

    return (
        <Pagination
            total={totalPages}
            initialPage={1}
            page={page}
            onChange={(page) => router.push(`?page=${page}`)}
        />
    )
}

export default PaginationContainer