const PROTOCOL = process.env.NEXT_PUBLIC_API_USE_SSL === 'true' ? 'https' : 'http';
const API_AUTH = `${PROTOCOL}://${process.env.NEXT_PUBLIC_ACCOUNT_HOSTNAME}`;
const API_BASE = `${PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOSTNAME}`;

const GET_PROFILE = '/me';
const GET_NEW_RELEASES = '/browse/new-releases';
const GET_USER_TOP_ITEMS = '/me/top';
const GET_RECENTLY_PLAYED_TRACKS = '/me/player/recently-played';

export { API_BASE, API_AUTH, GET_PROFILE, GET_NEW_RELEASES, GET_USER_TOP_ITEMS, GET_RECENTLY_PLAYED_TRACKS };
