import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const nameSearch = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(nameSearch)
    );
  }
);
