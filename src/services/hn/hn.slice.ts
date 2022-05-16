import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface HnItem {
    title: string;
    author: string;
    objectID: number;
    num_of_comments: number;
}

export interface HnList {
    hits: HnItem[];
    page: number;
}

export interface HnSearchPayload {
    page: number;
    query: string;
}


export const hnApi = createApi({
    reducerPath: 'hackerNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hn.algolia.com/api/v1' }),
    endpoints: (builder) => ({
        searchPosts: builder.query<HnList, HnSearchPayload>({
            query: () => {
                return '/search'
            }
        })
    })
})


export const {  useSearchPostsQuery } = hnApi;