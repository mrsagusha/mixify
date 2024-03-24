import { API_BASE } from '@/lib/constants/requestUrls';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserLoginRequest {
  clientId: string;
  codeVerifier: string;
  redirectUrl: string;
  code: string;
}

interface UserLoginResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

const userLogin = createAsyncThunk<UserLoginResponse, UserLoginRequest>(
  'auth/login',
  async ({ code, clientId, codeVerifier, redirectUrl }): Promise<UserLoginResponse> => {
    const data: UserLoginResponse = await axios.post(
      `${API_BASE}/api/token`,
      {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUrl,
        client_id: clientId,
        code_verifier: codeVerifier,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return data;
  }
);

export { userLogin };
