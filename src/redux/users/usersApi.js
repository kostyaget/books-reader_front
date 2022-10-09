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
    deleteProgress: builder.mutation({
      query: (progressId) => ({
        url: `/api/users/${progressId}/progress`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "/api/books/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    updateResume: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `/api/books/${id}/resume`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["users"],
    }),
    updateStatus: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `/api/books/${id}/status`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["users"],
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/api/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    updateIsTraining: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `/api/users/${id}/training`,
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
  useDeleteProgressMutation,
  useAddBookMutation,
  useUpdateResumeMutation,
  useUpdateStatusMutation,
  useDeleteBookMutation,
  useUpdateIsTrainingMutation,
} = usersApi;
