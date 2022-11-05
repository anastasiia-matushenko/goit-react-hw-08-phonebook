import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Container, Message, Subtitle, Title } from './ContactsPage.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { filterContacts } from 'redux/contacts/contactsSlice';
import { selectContacts, selectError, selectFilter, selectIsLoading, selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsFetchingCurrentUser, selectIsLoadingUser, selectToken } from 'redux/auth/authSelectors';

export const ContactsPage = () => {
    const contacts = useSelector(selectContacts);
    const filterName = useSelector(selectFilter);
    const error = useSelector(selectError);

    const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

    const token = useSelector(selectToken);

    console.log(isFetchingCurrentUser, token);
    const isLoading = useSelector(selectIsLoading);

    const isLoadingUser = useSelector(selectIsLoadingUser);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoadingUser) {
            console.log("CONTACTS", isLoadingUser);
            dispatch(fetchContacts());
        }
    }, [dispatch, isLoadingUser]);

    // const isLoading = useSelector(selectIsLoading);

    // const addContacts = ({ name, phone }) => {
    //     const newContact = {
    //         name,
    //         phone,
    //     };

    //     const newName = contacts.some(contact => {
    //         return contact.name.toLowerCase() === name.toLowerCase();
    //     });

    //     const result = newName
    //         ? toast.error(`${name} is already in contacts`, {
    //             position: 'top-center',
    //         })
    //         : dispatch(addContact(newContact))
    //     return result;
    // };

    const contactsFilterList = useSelector(selectVisibleContacts);
    console.log(contactsFilterList);
    return (
        <Container>
            <Title>Phonebook</Title>
            {/* <ContactForm addContacts={addContacts} /> */}
            <ContactForm />

            <Subtitle>Contacts</Subtitle>
            <Filter value={filterName} onChange={evt => dispatch(filterContacts(evt.target.value))} />
            {isLoading && <p>Loading...</p>}
            {!isLoading ? contacts.length > 0
                ? <ContactsList
                    contacts={contacts}
                />
                : <Message>❌ Your query did not find anything</Message> : ""}
            {error && <p>{error.message}</p>}
            {/* <ToastContainer /> */}
        </Container>
    );
};
