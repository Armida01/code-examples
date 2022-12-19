import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import axios from 'axios';

// Components
import { NewsItem } from '../../components';

// api
import { endpointPath } from '../../api';

// Actions
import { addNews } from '../../store/news/news.actions';

const Home = () => {
    const dispatch = useAppDispatch()
    const { list: newsList, page: currentPage, total: totalNews } = useAppSelector((state) => state.news);

    const handleClick = async () => {
        try {
            const props = {
                category: 'general',
                page: currentPage
            };

            const response = await axios.get(endpointPath(props));

            dispatch(addNews(response.data.articles));
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {newsList.map((news, index) => {
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
                        })}
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

export default Home;