import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

// Services
import { NewsService } from '../../services';

// Action types
import {GET_NEWS, CHANGE_NEWS_CATEGORY, CHANGE_PAGE } from './news.actionTypes';

// Types
import { INewsItem, IGetNewsPayloadData, IGetNewsActionPayloadData } from './types';

export const getNews = createAsyncThunk<IGetNewsActionPayloadData, IGetNewsPayloadData>(
    GET_NEWS,
    async (data) => {
        try {
            const response = await NewsService.getNews<INewsItem[]>(data);

            return {
                articles: response.data.articles,
                totalResults: response.data.totalResults
            };
        } catch (e: any) {
            throw e.message;
        }
    }
)

export const changePage = createAction(CHANGE_PAGE);

export const changeNewsCategory = createAction(CHANGE_NEWS_CATEGORY);
