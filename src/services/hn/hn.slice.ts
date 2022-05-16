import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HnList, HnPostDetail, HnSearchPayload } from "./hn.types";

export const hnApi = createApi({
  reducerPath: "hackerNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hn.algolia.com/api/v1" }),
  endpoints: (builder) => ({
    searchPosts: builder.query<HnList, HnSearchPayload>({
      query: ({ page, query }) => {
        const baseEndpoint = "/search";
        const params = [];
        if (page) {
          params.push(`page=${page}`);
        }

        if (query && query.length > 0) {
          params.push(`query=${query}`);
        }

        if (params.length > 0) {
          return `${baseEndpoint}?${params.join("&")}`;
        }
        return baseEndpoint;
      },
    }),
    getPostById: builder.query<HnPostDetail, number>({
      query: (id) => `/items/${id}`,
    }),
  }),
});

export const { useSearchPostsQuery, useGetPostByIdQuery } = hnApi;
