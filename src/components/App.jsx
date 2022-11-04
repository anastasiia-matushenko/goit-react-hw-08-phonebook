import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Message, Subtitle, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { filterContacts } from 'redux/contacts/contactsSlice';
import { selectContacts, selectError, selectFilter, selectIsLoading, selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { addContact, fetchContacts } from 'redux/contacts/contactsOperations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);

  const addContacts = ({ name, phone }) => {
    const newContact = {
      name,
      phone,
    };

    const newName = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    const result = newName
      ? toast.error(`${name} is already in contacts`, {
        position: 'top-center',
      })
      : dispatch(addContact(newContact))
    return result;
  };

  const contactsFilterList = useSelector(selectVisibleContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm addContacts={addContacts} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filterName} onChange={evt => dispatch(filterContacts(evt.target.value))} />
      {isLoading && <p>Loading...</p>}
      {!isLoading ? contactsFilterList.length > 0
        ? <ContactsList
          contacts={contactsFilterList}
        />
        : <Message>❌ Your query did not find anything</Message> : ""}
      {error && <p>{error.message}</p>}
      <ToastContainer />
    </Container>
  );
};
