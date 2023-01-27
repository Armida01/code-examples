import { createReducer } from '@reduxjs/toolkit';

// Actions
import { getNews, changePage, changeNewsCategory } from './news.actions';

// Types
import { INewsState } from './types';


const initialState: INewsState = {
    list: [],
    page: 1,
    total: 30,
    loading: true,
    error: false,
};

const newsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getNews.fulfilled, (state, action) => {
            state.list.push(...action.payload.articles);

            state.total = action.payload.totalResults;

            state.loading = false
            state.error = false;
        })
        .addCase(getNews.pending, (state) => {
            state.loading = true;
            state.error = false;
        })

        .addCase(changePage, (state) => {
            state.page++
        })

        .addCase(changeNewsCategory, (state) => {
            state.list = [];
            state.page = 1;
        })
        .addDefaultCase((state) => state);
});

export default newsReducer;
