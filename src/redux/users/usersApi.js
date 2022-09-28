// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://books-reader-project.herokuapp.com";

export const usersApi = createApi({
  reducerPath: "usersApi",
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
  tagTypes: ["users"],
  endpoints: (builder) => ({
    fetchUserData: builder.query({
      query: () => ({
        url: "/api/users/current",
      }),
      providesTags: ["users"],
    }),
    addResults: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `/api/users/${id}/results`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useFetchUserDataQuery,
  useLazyFetchUserDataQuery,
  useAddResultsMutation,
} = usersApi;
