import type { BaseQueryFn, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError, FetchBaseQueryMeta, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getFromLocalStorage } from './getFromLocalStorage';

const authorizedBaseQuery =
  (baseUrl: string): BaseQueryFn =>
  async (args, api, extraOptions): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
    const headers = { Authorization: `Bearer ${getFromLocalStorage('token')}` };

    return fetchBaseQuery({ baseUrl, headers })(args, api, extraOptions);
  };

export { authorizedBaseQuery };
