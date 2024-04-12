import type { ImageType } from '@/lib/types/image';

type ItemType = 'artists' | 'artist' | 'track' | 'album' | 'playlist' | 'user';

type AlbumType = 'album';

interface ProfileData {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: false;
    filter_locked: false;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  product: string;
  type: string;
  uri: string;
}

interface RecentlyPlayedTracksRequestParams {
  limit?: number;
  before?: number;
  after?: number;
}

interface UserTopItemsRequestParams {
  type: ItemType;
  timeRange: string;
  limit: number;
  offset: number;
}

interface RecentlyPlayedTracks {
  cursors: {
    after: string;
    before: string;
  };
  href: string;
  items: {
    context: {
      type: ItemType;
      external_urls: ExternalUrls;
      href: string;
      uri: string;
    };
    played_at: string;
    track: Track;
  }[];
  limit: number;
  next: string | null;
}

interface UserTopItems {
  href: string;
  items: UserTopItem[];
  limit: number;
  next: string;
  offset: number;
  previous: string | null;
  total: number;
}

interface FeaturedPlaylistsResponse {
  message: string;
  playlists: {
    href: string;
    items: Playlist[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
  };
}

interface FeaturedPlaylistsRequestParams {
  limit?: number;
  offset?: number;
  locale?: string;
}

interface ExternalUrls {
  spotify: string;
}

interface UserTopItem {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: ImageType[];
  name: string;
  popularity: number;
  type: ItemType;
  uri: string;
}

interface Followers {
  href: string;
  total: number;
}

interface Artist {
  extrernal_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: ImageType[];
  name: string;
  popularity: number;
  type: ItemType;
  uri: string;
}

interface Album {
  album_type: AlbumType;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: ImageType[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: ItemType;
  uri: string;
}

interface Playlist {
  collaborative: boolean;
  description: string;
  externalUrls: ExternalUrls;
  href: string;
  id: string;
  images: ImageType[];
  name: string;
  owner: User;
  primary_color: string;
  public: false;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: ItemType;
  uri: string;
}

interface User {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: ItemType;
  uri: string;
}

interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: ItemType;
  uri: string;
}

export type {
  ProfileData,
  UserTopItemsRequestParams,
  UserTopItem,
  UserTopItems,
  ItemType,
  Artist,
  Album,
  FeaturedPlaylistsResponse,
  FeaturedPlaylistsRequestParams,
  RecentlyPlayedTracksRequestParams,
  RecentlyPlayedTracks,
};
