export interface IResponsePaginatedData<T = any> {
    articles: T;
    totalResults: number;
}
