import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registation,
  login,
  logout,
  fetchCurrentUser,
} from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builer => {
    builer
      .addCase(registation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
        state.isFetchingCurrentUser = false;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isLoading = false;
        state.error = state.payload;
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(
        isAnyOf(registation.pending, login.pending, logout.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(registation.rejected, login.rejected, logout.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default authSlice.reducer;
