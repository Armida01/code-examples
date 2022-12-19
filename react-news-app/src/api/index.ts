// Types
import { IEndPoint } from './types';

export const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country="
export const API_KEY = "406637f988254a30849cb72229a4daf1"
export const endpointPath = ({category, page, country = 'ru', pageSize = 8}:IEndPoint) => {
    return `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`
};
