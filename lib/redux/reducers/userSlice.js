import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // signIn: (state) => state.isSignedIn = true,
    // signOut: (state) => state.isSignedIn = false,
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
