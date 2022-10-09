import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { usersApi } from "../users/usersApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    isError: false,
  },
  // reducers: {},
  reducers: {
    googleLogIn(state, action) {
      state.user = action?.payload.user;
      state.token = action?.payload.token;
      state.isLoggedIn = true;
    },
  },
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
          state.isError = false;
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
        authApi.endpoints.fetchGoogleAccount.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.fetchGoogleAccount.matchRejected,
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
          state.isError = false;
        }
      )
      .addMatcher(
        usersApi.endpoints.fetchUserData.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
        }
      )
    // .addMatcher(
    //   usersApi.endpoints.fetchUserData.matchRejected,
    //   (state, _action) => {
    //     state.user = null;
    //     state.isLoggedIn = false;
    //     state.token = null
    //   }
    // )
  },
});

export const { googleLogIn } = authSlice.actions;
export default authSlice.reducer;

//  selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsError = (state) => state.auth.isError;
export const selectIsPending = (state) => state.auth.isPending;
export const selectCurrentUserBook = (state) => state.auth.user.books;
