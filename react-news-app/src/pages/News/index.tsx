import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';

// Components
import { NewsItem, Loader } from '../../components';

// Actions
import { changeNewsCategory, changePage, getNews } from 'store/news/news.actions';

// Types
import { IPageRoutePath } from 'types'

const News: FC<IPageRoutePath> = ({ category }) => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const {
        list: newsList,
        page: currentPage,
        total: totalNews,
        loading,
    } = useAppSelector((state) => state.news);

    const handleClick = () => {
        dispatch(changePage())
    };

    const newsItem = (
        newsList.map((news, index) => {
            return (
                <NewsItem
                    key={index}
                    category="general"
                    title={news.title}
                    description={news.description}
                    author={news.author}
                    date={news.publishedAt}
                    channel={news.source}
                    alt="Card image"
                    publishedAt={news.publishedAt}
                    imageUrl={
                        news.urlToImage === null
                            ? require('../../assets/images/noImage.png')
                            : news.urlToImage
                    }
                    urlNews={news.url}
                />
            )
        })
    )

    useEffect(() => {
        dispatch(changeNewsCategory())
    }, [location.pathname]);

    useEffect(() => {
        dispatch(getNews({
            country: 'ru',
            category: category,
            apiKey: process.env.REACT_APP_API_KEY,
            page: currentPage,
            pageSize: 8,
        }));
    }, [currentPage, category]);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {newsItem}
                    </div>


                    <div className="p-2 w-full">
                        {totalNews > newsList.length && (
                            <button
                                onClick={handleClick}
                                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                See More
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
