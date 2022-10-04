import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://books-reader-project.herokuapp.com";

// Authorization
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    fetchGoogleAccount: builder.query({
      query: () => ({
        url: "/api/auth/google",
      }),
      providesTags: ["auth"],
    }),
    createNewUser: builder.mutation({
      query: (body) => ({
        url: "/api/auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useFetchGoogleAccountQuery,
  useCreateNewUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
