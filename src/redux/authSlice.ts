import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

export const {login, logout} = authSlice.actions;

export const selectAuthState = (state: {auth: AuthState}) => state.auth;

export default authSlice.reducer;
