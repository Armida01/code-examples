import { createAction } from '@reduxjs/toolkit';

// Action types
import { ADD_NEWS, CHANGE_NEWS_CATEGORY } from './news.actionTypes';

// Types
import { INewsItem } from './types';

export const addNews = createAction<INewsItem>(ADD_NEWS);

export const changeNewsCategory = createAction<INewsItem>(CHANGE_NEWS_CATEGORY);