import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    isContactsPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.createNewUser.matchPending,
        (state, _action) => {
          state.isPending = true;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.createNewUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isError = false;
        }
      )
      .addMatcher(
        authApi.endpoints.createNewUser.matchRejected,
        (state, _action) => {
          state.isError = true;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchPending,
        (state, _action) => {
          state.isPending = true;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchRejected,
        (state, _action) => {
          state.isError = true;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.fetchUserData.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.fetchUserData.matchRejected,
        (state, _action) => {
          state.user = null;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.logoutUser.matchFulfilled,
        (state, _action) => {
          state.user = null;
          state.token = null;
          state.isLoggedIn = false;
        }
      );
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsError = (state) => state.auth.isError;
export const selectIsPending = (state) => state.auth.isPending;
