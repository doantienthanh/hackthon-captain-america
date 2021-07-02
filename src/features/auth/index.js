import { createSlice } from '@reduxjs/toolkit';
import * as operations from './operations';

const initialState = {
  user: null,
  loading: false,
  access_token: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.login.pending]: (state) => {
      state.loading = true;
    },
    [operations.login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.access_token = payload.accessToken;
    },
    [operations.login.rejected]: (state) => {
      state.loading = false;
    },
    [operations.register.pending]: (state) => {
      state.loading = true;
    },
    [operations.register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.access_token = payload.accessToken;
    },
    [operations.register.rejected]: (state) => {
      state.loading = false;
    },
    [operations.forgotPassword.pending]: (state) => {
      state.loading = true;
    },
    [operations.forgotPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [operations.forgotPassword.rejected]: (state) => {
      state.loading = false;
    },
    [operations.codeForgotPassword.pending]: (state) => {
      state.loading = true;
    },
    [operations.codeForgotPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [operations.codeForgotPassword.rejected]: (state) => {
      state.loading = false;
    },
    [operations.resetPassword.pending]: (state) => {
      state.loading = true;
    },
    [operations.resetPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [operations.resetPassword.rejected]: (state) => {
      state.loading = false;
    },
    [operations.linkedInLogin.pending]: (state) => {
      state.loading = true;
    },
    [operations.linkedInLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.access_token = payload.accessToken;
    },
    [operations.linkedInLogin.rejected]: (state) => {
      state.loading = false;
    },
    [operations.googleLogin.pending]: (state) => {
      state.loading = true;
    },
    [operations.googleLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.access_token = payload.accessToken;
    },
    [operations.googleLogin.rejected]: (state) => {
      state.loading = false;
    },
    [operations.loginWithFacebook.pending]: (state) => {
      state.loading = true;
    },
    [operations.loginWithFacebook.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.access_token = payload.accessToken;
    },
    [operations.loginWithFacebook.rejected]: (state) => {
      state.loading = false;
    },
    [operations.loginWithApple.pending]: (state) => {
      state.loading = true;
    },
    [operations.loginWithApple.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.access_token = payload.accessToken;
    },
    [operations.loginWithApple.rejected]: (state) => {
      state.loading = false;
    },
    [operations.getMe.pending]: (state) => {
      state.loading = true;
    },
    [operations.getMe.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    [operations.getMe.rejected]: (state) => {
      state.loading = false;
    },
    [operations.updateMe.pending]: (state) => {
      state.loading = true;
    },
    [operations.updateMe.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    },
    [operations.updateMe.rejected]: (state) => {
      state.loading = false;
    },
    [operations.logout.pending]: (state) => {
      state.loading = true;
    },
    [operations.logout.rejected]: (state) => {
      state.loading = false;
    },
    [operations.logout.fulfilled]: (state) => {
      state.loading = false;
      state.user = null;
      state.access_token = null;
    },
  },
});

export const { actions, reducer } = authSlice;
export default reducer;
