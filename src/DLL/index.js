import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${
      import.meta.env.VITE_API_TOKEN
    }`,
  }),
  endpoints: (builder) => ({
    GetNews: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
