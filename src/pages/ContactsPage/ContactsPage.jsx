import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { BoxContacts, BoxForm, Container, Message, Title } from './ContactsPage.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { filterContacts } from 'redux/contacts/contactsSlice';
import { selectContacts, selectError, selectFilter, selectIsLoading, selectVisibleContacts } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { isAuthorizationHeaders } from 'redux/auth/authOperations';

export const ContactsPage = () => {
    const contacts = useSelector(selectContacts);
    const filterName = useSelector(selectFilter);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const contactsFilterList = useSelector(selectVisibleContacts);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthorizationHeaders()) {
            dispatch(fetchContacts());
        }
    }, [dispatch]);

    return (
        <Container>
            <BoxForm>
                <Title>Phonebook</Title>
                <ContactForm />
            </BoxForm>
            <BoxContacts>
                <Title>Contacts</Title>
                <Filter value={filterName} onChange={evt => dispatch(filterContacts(evt.target.value))} />
                {!isLoading
                    ? contacts.length > 0
                        ? contactsFilterList.length > 0
                            ? <ContactsList
                                contacts={contactsFilterList}
                            />
                            : <Message>❌ Your query did not find anything</Message>
                        : <p>You don't have contacts yet</p>
                    : ""}
                {isLoading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}
            </BoxContacts>
        </Container>
    );
};
