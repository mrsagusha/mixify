const PROTOCOL = process.env.NEXT_PUBLIC_API_USE_SSL === 'true' ? 'https' : 'http';
const API_BASE = `${PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOSTNAME}`;

export { API_BASE };
