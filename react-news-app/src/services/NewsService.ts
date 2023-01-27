// Services
import Api from './Api';

// Utils
import { request } from '../utils';

// Types
import { IResponsePaginatedData } from './types';

class NewsService extends Api {
    static getNews<T>(params: any) {
        return request<IResponsePaginatedData>('GET', '', undefined, params);
    }
}

export default NewsService;
