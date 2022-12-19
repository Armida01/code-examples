import { createReducer } from '@reduxjs/toolkit';

// Actions
import { addNews, changeNewsCategory } from './news.actions';

// Types
import { INewsState } from './types';


const initialState: INewsState = {
    list: [],
    loading: false,
    page: 1,
    total: 30
};

const newsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addNews, (state, action) => {
            state.list.push(action.payload);
            state.list = state.list.flat()
            state.page++
        })
        .addCase(changeNewsCategory, (state, action) => {
            state.list = [];
            state.page = 1;
            state.list.push(action.payload);
        })
        .addDefaultCase((state) => state);
});

export default newsReducer;