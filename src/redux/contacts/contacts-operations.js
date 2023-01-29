import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const fetchContacts = createAsyncThunk(
  'contacts/FetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/contacts', contact);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContacts',
//   async (arg, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`/contacts`, arg);
//       return response.data;
//     } catch (e) {
//       console.log(e);
//       return rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (arg, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${arg}`);
//       return response.data.id;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // export const filterContacts = createAsyncThunk(
// //   'contacts/filterContacts',
// //   async (arg, thunkAPI) => {
// //     try {
// //       const response = await axios.get('/contacts');
// //       const filteredContacts = response.data.filter(contact => {
// //         return contact.name.toLowerCase().includes(arg.toLowerCase());
// //       });
// //       return filteredContacts;
// //     } catch (e) {
// //       return thunkAPI.rejectWithValue(e.message);
// //     }
// //   }
// // );
