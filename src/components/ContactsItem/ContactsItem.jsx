import PropTypes from "prop-types";
import { Button, Item } from "./ContactsItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contactsOperations";

export const ContactsItem = ({ idContact, contact, phone }) => {
    const dispatch = useDispatch();
    return (
        <Item>
            <span>{contact}: </span><span>{phone}</span>
            <Button type="button" onClick={() => dispatch(deleteContact(idContact))}>Delete</Button>
        </Item>
    )
};

ContactsItem.propTypes = {
    idContact: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};