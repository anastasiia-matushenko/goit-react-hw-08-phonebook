import { register, login, logout, fetchCurrentUser } from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoadingUser: false,
  error: null,
  isFetchingCurrentUser: false,
};

const handlePending = state => {
  state.isLoadingUser = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoadingUser = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: handlePending,
    [login.pending]: handlePending,
    [logout.pending]: handlePending,

    [register.rejected]: handleRejected,
    [login.rejected]: handleRejected,
    [logout.rejected]: handleRejected,

    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoadingUser = false;
      state.token = token;
      state.user = user;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoadingUser = false;
      state.token = token;
      state.user = user;
    },
    [logout.fulfilled]: state => {
      state.isLoadingUser = false;
      state.token = null;
      state.user = { name: '', email: '' };
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoadingUser = true;
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.isLoadingUser = false;
      state.user = payload;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoadingUser = false;
      state.error = payload;
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
