export interface INewsItem {
    [key: string]: string
}

export interface INewsState {
    list: INewsItem[],
    loading: Boolean,
    page: number,
    total: number
}