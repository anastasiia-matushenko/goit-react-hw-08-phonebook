import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled]({ contacts }, { payload }) {
      contacts.items = payload;
      contacts.isLoading = false;
      contacts.error = null;
    },
    [addContact.fulfilled]({ contacts }, { payload }) {
      contacts.items = [...contacts.items, payload];
      contacts.isLoading = false;
      contacts.error = null;
    },
    [deleteContact.fulfilled]({ contacts }, { payload }) {
      contacts.items = contacts.items.filter(({ id }) => id !== payload);
      contacts.isLoading = false;
      contacts.error = null;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
