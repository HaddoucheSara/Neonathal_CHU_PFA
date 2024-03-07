
import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from './functions';
import { API_URL } from 'utils/const';

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ body }) => ({
        url: '/api/users',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: buildBaseQuery(),
  endpoints:(builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: '/api/users',
        method: 'GET',
      }),
    }),
  }),
});

export const usersUpdate = createApi({
  reducerPath: 'usersUpdate',
  baseQuery: buildBaseQuery(),
  endpoints: (builder) => ({
    patchUser: builder.mutation({
      query: ({ id, changes }) => ({
        url: `/api/users/${id}`,
        method: 'PATCH',
        body: changes,
        
      }),
    }),
  }),
});





export const { usePatchUserMutation } = usersUpdate;

export const { useGetAllUsersQuery} = usersApi;
export const { useRegisterMutation } = registerApi;


// import { createApi ,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { buildBaseQuery } from './functions';

// export const registerApi = createApi({
//   reducerPath: 'registerApi',
//   baseQuery: buildBaseQuery(),
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: ({ body }) => ({
//         url: '/api/users',
//         method: 'POST',
//         body,
//       }),
//     }),
//   }),
// });

// export const usersApi = createApi({
//   reducerPath: 'usersApi',
//   baseQuery: fetchBaseQuery(),
//   endpoints:(builder) => ({
//     getAllUsers: builder.query({
//       query: () => ({
//         url: '/api/users',
//         method: 'GET',

//       }),
//     }),
//   }),
// });


// export const { useGetAllUsersQuery} = usersApi;
// export const { useRegisterMutation } = registerApi;