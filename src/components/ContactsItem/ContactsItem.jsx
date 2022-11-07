import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button } from '@chakra-ui/react'
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { deleteContact } from "redux/contacts/contactsOperations";
import { Item, Name, Phone } from "./ContactsItem.styled";

export const ContactsItem = ({ idContact, contact, number }) => {
    const dispatch = useDispatch();
    return (
        <Item>
            <Name>{contact}: </Name><Phone>{number}</Phone>
            <Button display="flex" ml="auto" rightIcon={<RiDeleteBin6Fill />} colorScheme='teal' size='xs' type="button" onClick={() => dispatch(deleteContact(idContact))}>Delete</Button>
        </Item>
    )
};

ContactsItem.propTypes = {
    idContact: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};