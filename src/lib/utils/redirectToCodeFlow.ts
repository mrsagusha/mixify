import { API_BASE } from '@/lib/constants/requestUrls';
import { generateRandomString } from '@/lib/utils/generateRandomString';
import { generateCodeChallenge } from '@/lib/utils/generateCodeChallenge';

const redirectToCodeFlow = async (clientId: string, redirectUri: string): Promise<void> => {
  const scope = 'user-read-private user-read-email';
  const authUrl = new URL(`${API_BASE}/authorize`);
  const codeVerifier = generateRandomString(64);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  window.localStorage.setItem('code_verifier', codeVerifier);

  const params: Record<string, string> = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge as unknown as string,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
};

export { redirectToCodeFlow };
