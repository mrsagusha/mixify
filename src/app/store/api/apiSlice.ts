import { API_BASE, GET_PROFILE, GET_RECENTLY_PLAYED_TRACKS, GET_USER_TOP_ITEMS } from '@/lib/constants/requestUrls';
import { ProfileData, UserTopItemsRequestParams, UserTopItemsResponse } from '@/lib/types/api';
import { authorizedBaseQuery } from '@/lib/utils/authorizedBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const mixifyApi = createApi({
  reducerPath: 'mixifyApi',
  baseQuery: authorizedBaseQuery(API_BASE),
  endpoints: ({ query }) => ({
    getUserProfile: query<ProfileData, void>({
      query: () => GET_PROFILE,
    }),
    getUserTopItems: query<UserTopItemsResponse, UserTopItemsRequestParams>({
      query: ({ type, limit, offset, timeRange }) => ({
        url: `${GET_USER_TOP_ITEMS}/${type}`,
        params: { limit, offset, timeRange },
      }),
    }),
    getUserRecentlyPlayedTrancks: query({
      query: ({ limit, before, after }) => ({
        url: GET_RECENTLY_PLAYED_TRACKS,
        params: { limit, before, after },
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useGetUserTopItemsQuery, useGetUserRecentlyPlayedTrancksQuery } = mixifyApi;
