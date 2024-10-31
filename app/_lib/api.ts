"use server";

import { IBlog } from "../_types";

export const fetchBlogs = async (page: number = 1, per_page: number = 12): Promise<IBlog[]> => {
    try {
        const response = await fetch(`https://dev.to/api/articles?page=${page}&per_page=${per_page}`, {
            cache: "no-store",
        });

        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchBlogsTotalPages = async () => {
    try {
        const response = await fetch("https://dev.to/api/articles", {
            cache: "no-store",
        });

        if (!response.ok) throw new Error("Failed to fetch");
        const data: IBlog[] = await response.json();
        return data.length;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchBlogById = async (id: number): Promise<IBlog> => {
    try {
        const response = await fetch(`https://dev.to/api/articles/${id}`, {
            cache: "no-store",
        });

        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
