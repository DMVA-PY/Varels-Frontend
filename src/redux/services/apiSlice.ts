import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { setAuth, logout } from '../features/authSlice'

const mutex = new Mutex()
  
const baseQuery = fetchBaseQuery({ 
    baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api/`, 
    credentials: 'include' 
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs, 
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {

  await mutex.waitForUnlock()
  
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {

    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            url:`/jwt/refresh/`,
            method:`POST`,
          },
          api,
          extraOptions
        )
        if (refreshResult.data) {
          api.dispatch(setAuth())
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logout())
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
})  


/*
This setup ensures that your frontend can seamlessly interact with your Django backend, 
handling authentication and reauthentication as needed. 
*/

/* 
apiSlice.ts file defines your connection to the Django backend 
using Redux Toolkit's createApi and fetchBaseQuery functions
*/

/* 
apiSlice is created using createApi. 
This slice will handle the API requests made to your Django backend, 
automatically managing things like caching, request deduplication, and query state management.
*/