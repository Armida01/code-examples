import process from "process";

export interface INewsItem {
    [key: string]: string
}

export interface INewsState {
    list: INewsItem[],
    loading: Boolean,
    error: Boolean,
    page: number,
    total: number,
}

interface IGetNewsPayloadData {
    country: string;
    category: string;
    apiKey: process.env.API_KEY;
    page?: number;
    pageSize: number,
}

interface IGetNewsActionPayloadData {
    articles: INewsItem[];
    totalResults: number;
}
