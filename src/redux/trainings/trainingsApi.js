// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://books-reader-project.herokuapp.com";

export const trainingsApi = createApi({
  reducerPath: "trainingsApi",
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
  tagTypes: ["trainings"],
  endpoints: (builder) => ({
    fetchTrainingsData: builder.query({
      query: () => ({
        url: "/api/trainings",
      }),
      providesTags: ["trainings"],
    }),
    startTraining: builder.mutation({
      query: (body) => ({
        url: "/api/trainings/start",
        method: "POST",
        body,
      }),
      invalidatesTags: ["trainings"],
    }),
    updateTrainingStatus: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `/api/trainings/${id}/status`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["trainings"],
    }),
    deleteTrainingBook: builder.mutation({
      query: (trainingId) => ({
        url: `/contacts/${trainingId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useFetchTrainingsDataQuery,
  useStartTrainingMutation,
  useUpdateTrainingStatusMutation,
  useDeleteTrainingBookMutation,
} = trainingsApi;
