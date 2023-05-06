import { createAsyncThunk } from '@reduxjs/toolkit';
import { delContact, getContacts, postContact } from 'contactsApi';

export const getContactsAction = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await getContacts();
  }
);
export const postContactsAction = createAsyncThunk(
  'contacts/postContacts',
  async data => {
    await postContact(data);
    return data;
  }
);
export const deleteContactsAction = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    await delContact(id);
    return id;
  }
);

// export const getContactsAction = () => {
//   return async dispatch => {
//     try {
//       dispatch(contactsSlice.actions.fetching());
//       const contacts = await getContacts();
//       // console.log(contacts);
//       dispatch(contactsSlice.actions.fetchSuccess(contacts));
//     } catch (error) {
//       dispatch(contactsSlice.actions.fetchError(error));
//     }
//   };
// };
