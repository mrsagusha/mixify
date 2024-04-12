import {
  API_BASE,
  GET_ARTIST,
  GET_FETURED_PLAYLISTS,
  GET_PROFILE,
  GET_RECENTLY_PLAYED_TRACKS,
  GET_USER_TOP_ITEMS,
} from '@/lib/constants/requestUrls';
import {
  FeaturedPlaylistsRequestParams,
  FeaturedPlaylistsResponse,
  ProfileData,
  RecentlyPlayedTracksRequestParams,
  RecentlyPlayedTracks,
  UserTopItemsRequestParams,
  UserTopItems,
  Artist,
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
    getUserTopItems: query<UserTopItems, UserTopItemsRequestParams>({
      query: ({ type, limit, offset, timeRange }) => ({
        url: `${GET_USER_TOP_ITEMS}/${type}`,
        params: { limit, offset, timeRange },
      }),
    }),
    getUserRecentlyPlayedTracks: query<RecentlyPlayedTracks, RecentlyPlayedTracksRequestParams>({
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
    getArtist: query<Artist, string>({
      query: (id) => ({
        url: `${GET_ARTIST}${id}`,
      }),
    }),
    getRelatedArtists: query({
      query: (id) => ({
        url: `${GET_ARTIST}${id}/related-artists`,
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUserTopItemsQuery,
  useGetUserRecentlyPlayedTracksQuery,
  useGetFeaturedPlaylistsQuery,
  useGetRelatedArtistsQuery,
  useGetArtistQuery,
} = mixifyApi;
