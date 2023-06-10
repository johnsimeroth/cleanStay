import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import * as SecureStore from 'expo-secure-store';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    checkStoredJWT: builder.query({
      providesTags: ['User'],
      async queryFn() {
        try {
          console.log('running query again!');
          const token = await SecureStore.getItemAsync('csJWT');
          // const token = await auth.currentUser?.uid;
          if (token) {
            return { data: token };
          } else {
            return { data: null };
          }
        } catch (e) {
          console.error(e.message);
          return { error: e.message };
        }
      },
    }),

    storeJWT: builder.mutation({
      invalidatesTags: ['User'],
      async queryFn({ token }) {
        try {
          console.log('THIS IS THE TOKEN: ', token);
          await SecureStore.setItemAsync('csJWT', token);
          return { data: null };
        } catch (e) {
          console.error(e.message);
          return { error: e.message };
        }
      },
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
