import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { doc, getDoc, collection, setDoc } from 'firebase/firestore';
import * as SecureStore from 'expo-secure-store';
import { db } from '../../firebaseConfig';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query({
      providesTags: ['User'],
      async queryFn(uid) {
        if (!uid) return { data: null };
        try {
          let userData = await getDoc(doc(db, 'users', uid));
          let result = userData.data();
          // TODO: This initializes the user doc in firestore if it doesn't exist, but I
          // feel there's a cleaner way to do this outside this query. Revisit later.
          if (!result) {
            await setDoc(doc(collection(db, 'users'), uid), { accountCreated: new Date() });
            userData = await getDoc(doc(db, 'users', uid));
            result = userData.data();
          }
          return { data: result };
        } catch (e) {
          console.error(`from getUser query: ${e.message}`);
          return { error: e.message };
        }
      },
    }),

    addUser: builder.mutation({
      invalidatesTags: ['User'],
      async queryFn({ uid, formData }) {
        try {
          await setDoc(doc(collection(db, 'users'), uid), formData);
          return { data: 'success' };
        } catch (e) {
          console.error(`from addUser query: ${e.message}`);
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
  }),
});

export const {
  useGetUserQuery,
  useLogoutMutation,
  useAddUserMutation,
} = authApi;
