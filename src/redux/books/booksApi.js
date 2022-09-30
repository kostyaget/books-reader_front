// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://books-reader-project.herokuapp.com";

export const booksApi = createApi({
  reducerPath: "booksApi",
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
  tagTypes: ["books"],
  endpoints: (builder) => ({
    fetchBooks: builder.query({
      query: () => ({
        url: "/api/books",
      }),
      providesTags: ["books"],
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "/api/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
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
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/api/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useFetchBooksQuery,
  useAddBookMutation,
  useUpdateResumeMutation,
  useDeleteBookMutation,
} = booksApi;
