import { createApi } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({ //Callback
        getTodos: builder.query({
            query: () => '/todos',
        }),
    }),
})

export const { useGetTodosQuery } = todosApi;
