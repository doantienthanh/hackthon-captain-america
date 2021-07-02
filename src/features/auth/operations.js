import { createAsyncThunk } from '@reduxjs/toolkit';
import * as AuthApis from 'api/auth';
import http from 'api/http';
import messaging from '@react-native-firebase/messaging';

// export const syncDeviceToken = createAsyncThunk(
//   'user/registerToken',
//   async (token, { rejectWithValue }) => {
//     try {
//       await AuthApis.syncDeviceToken({
//         deviceToken: token,
//         tokenStatus: true,
//       });
//     } catch (err) {
//       return rejectWithValue(err.data);
//     }
//   },
// );

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    const token = await messaging().getToken();
    try {
      await AuthApis.syncDeviceToken({
        deviceToken: token,
        tokenStatus: false,
      });
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.login(data);
      await http.setAuthorizationHeader(response?.data?.accessToken);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }
      return rejectWithValue(err.data);
    }
  },
);

export const googleLogin = createAsyncThunk(
  'auth/google',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.googleLoginApi(data);
      await http.setAuthorizationHeader(response?.data?.accessToken);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }
      return rejectWithValue(err.data);
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.register(data);
      await http.setAuthorizationHeader(response?.data?.accessToken);
      return response?.data;
    } catch (err) {
      if (!err.data) {
        throw err;
      }
      return rejectWithValue(err.data);
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.forgotPasswordApi(data);
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);
export const codeForgotPassword = createAsyncThunk(
  'auth/codeForgotPassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.verifyForgotPasswordCodeApi(data);
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.resetPasswordApi(data);
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);

export const linkedInLogin = createAsyncThunk(
  'auth/linkedin',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.linkedInLoginApi(data);
      await http.setAuthorizationHeader(response?.data?.accessToken);
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);
export const loginWithFacebook = createAsyncThunk(
  'auth/facebook',
  async (access_token, { rejectWithValue }) => {
    try {
      const response = await AuthApis.loginFaceBookApi(access_token);
      await http.setAuthorizationHeader(response?.data?.accessToken);
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);

export const loginWithApple = createAsyncThunk(
  'auth/apple',
  async (idToken, { rejectWithValue }) => {
    try {
      const response = await AuthApis.loginAppleApi(idToken);
      http.setAuthorizationHeader(response?.data?.accessToken);
      if (response.data) {
        return response?.data;
      }
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);

export const getMe = createAsyncThunk(
  'users/me',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthApis.getMe();
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);

export const updateMe = createAsyncThunk(
  'users/edit/me',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthApis.updateMe(data);
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  },
);
