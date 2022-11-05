import { useState } from 'react';
// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Button, Form, Label } from './ContactForm.styled';
import { addContact } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const addContacts = ({ name, number }) => {
    const newContact = {
      name,
      number,
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

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    addContacts({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </label>
        <label>
          <Label>Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
            placeholder="111-11-11"
          />
        </label>
        <Button>Add contact</Button>
      </Form>
      <ToastContainer />
    </>
  );
};

// ContactForm.propTypes = {
//   addContacts: PropTypes.func.isRequired,
// };
