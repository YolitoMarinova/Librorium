import apiClient from "./api";

export interface Book {
    id: number;
    title: string;
    author: string;
}

export const fetchBookById = async (id: number): Promise<Book> => {
    const response = await apiClient.get<Book>(`/book/${id}`);
    return response.data;
};