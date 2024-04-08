import {
  API_BASE,
  GET_FETURED_PLAYLISTS,
  GET_PROFILE,
  GET_RECENTLY_PLAYED_TRACKS,
  GET_USER_TOP_ITEMS,
} from '@/lib/constants/requestUrls';
import {
  FeaturedPlaylistsRequestParams,
  FeaturedPlaylistsResponse,
  ProfileData,
  UserTopItemsRequestParams,
  UserTopItemsResponse,
} from '@/lib/types/api';
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
      query: ({ limit = 10, before, after }) => ({
        url: GET_RECENTLY_PLAYED_TRACKS,
        params: { limit, before, after },
      }),
    }),
    getFeaturedPlaylists: query<FeaturedPlaylistsResponse, FeaturedPlaylistsRequestParams>({
      query: ({ limit = 10, offset = 0, locale = 'us_US' }) => ({
        url: GET_FETURED_PLAYLISTS,
        params: { limit, offset, locale },
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUserTopItemsQuery,
  useGetUserRecentlyPlayedTrancksQuery,
  useGetFeaturedPlaylistsQuery,
} = mixifyApi;
