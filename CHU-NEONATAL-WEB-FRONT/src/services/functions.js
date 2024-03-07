import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../utils/const';

export const buildBaseQuery = () => fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        headers.set('content-type', 'application/json');
        const token = getState()?.auth?.accessToken;
        if (token && !headers.get('authorization')) {
            headers.set('authorization', token);
        }

        return headers;
    },
});
// export const buildBaseQuery = () => fetchBaseQuery({
//     baseUrl: API_URL,
//     prepareHeaders: (headers, { getState }) => {
//       headers.set('content-type', 'application/json');
//       const token = getState()?.auth?.token;
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   });



