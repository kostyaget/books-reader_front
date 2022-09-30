import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://*.herokuapp.com";

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
  tagTypes: ["auth/user", "books"],
  endpoints: (builder) => ({
    fetchUserData: builder.query({
      query: () => ({
        url: "/users/current",
      }),
      providesTags: ["auth/user"],
    }),
    createNewUser: builder.mutation({
      query: (body) => ({
        url: "/users/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth/user"],
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth/user"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      invalidatesTags: ["auth/user"],
    }),
  }),
});

export const {
  useFetchUserDataQuery,
  useLazyFetchUserDataQuery,
  useCreateNewUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
