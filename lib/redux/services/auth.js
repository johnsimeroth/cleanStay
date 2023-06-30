import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import * as SecureStore from 'expo-secure-store';
import { auth } from '../../firebaseConfig';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      providesTags: ['User'],
      asnyc queryFn({})
    }),

    login: builder.mutation({
      invalidatesTags: ['User'],
      async queryFn({ email, password }) {
        try {
          //  const user = await signInWithEmailAndPassword(email, password);
          console.log('login is running');
          const user = await signInWithEmailAndPassword(auth, 'j@g.com', '123456');
          console.log('this is the user token: ', user.idToken);
          return { data: user };
        } catch (e) {
          console.error(e.message);
          return { error: e.message };
        }
      },
    }),

    logout: builder.mutation({
      invalidatesTags: ['User'],
      async queryFn() {
        try {
          await SecureStore.deleteItemAsync('csJWT');
          console.log('tag invalidated!');
          return { data: null };
        } catch (e) {
          console.error(e.message);
          return { error: e.message };
        }
      },
    }),

    addUser: builder.mutation({
      invalidatesTags: ['User'],
      async queryFn({ email, password }) {
        try {
          const user = await createUserWithEmailAndPassword(email, password);
          // const user = await createUserWithEmailAndPassword('j@g.com', '123456');
          // await SecureStore.setItemAsync('csJWT', user.getToken());
          console.log('this is the user token: ', user.getToken());
          return { data: user };
        } catch (e) {
          console.error(e.message);
          return { error: e.message };
        }
      },
    }),
  }),
});

export const {
  useCheckStoredJWTQuery,
  useStoreJWTMutation,
  useLogoutMutation,
  useAddUserMutation,
  useLoginMutation,
} = authApi;
