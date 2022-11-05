import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY1MDdhMzRlMWE3NTAwMTYzNGU0Y2MiLCJpYXQiOjE2Njc1NjU0NzV9.62eNwLM8TO0pntxJs4FgLGeSlhHYR-p5L2rfoo5BwC0`,
//   },
// });

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
