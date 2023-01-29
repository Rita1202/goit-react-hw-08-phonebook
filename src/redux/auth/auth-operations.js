import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registation = createAsyncThunk(
  'auth/registation',
  async (userData, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/users/signup', userData);
      console.log(responce);
      token.set(responce.data.token);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/users/login', userData);
      token.set(responce.data.token);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/users/logout');
      token.unset(responce.data.token);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.token;
    if (!tokenLS) {
      return rejectWithValue('No token');
    }
    token.set(tokenLS);
    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
