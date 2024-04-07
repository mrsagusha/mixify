import { API_AUTH } from '@/lib/constants/requestUrls';
import { setToLocalStorage } from '@/lib/utils/setToLocalStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserLoginRequest {
  clientId: string;
  codeVerifier: string;
  redirectUrl: string;
  code: string;
}

interface UserLoginResponse {
  data: {
    access_token: string;
    token_type: string;
    scope: string;
    expires_in: number;
    refresh_token: string;
  };
}

const userLogin = createAsyncThunk<UserLoginResponse, UserLoginRequest>(
  'auth/login',
  async ({ code, clientId, codeVerifier, redirectUrl }): Promise<UserLoginResponse> => {
    const {
      data: { access_token, expires_in, refresh_token, token_type, scope },
    }: UserLoginResponse = await axios.post(
      `${API_AUTH}/api/token`,
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

    setToLocalStorage('token', access_token);
    setToLocalStorage('refreshToken', refresh_token);
    setToLocalStorage('expiresIn', String(expires_in));

    return { access_token, expires_in, refresh_token, token_type, scope };
  }
);

export { userLogin };
