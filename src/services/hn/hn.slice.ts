import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HnList, HnSearchPayload } from "./hn.types";

export const hnApi = createApi({
  reducerPath: "hackerNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hn.algolia.com/api/v1" }),
  endpoints: (builder) => ({
    searchPosts: builder.query<HnList, HnSearchPayload>({
      query: ({ page }) => {
        return `/search?page=${page}`;
      },
    }),
  }),
});

export const { useSearchPostsQuery } = hnApi;
