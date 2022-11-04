import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactsItem
          key={id}
          idContact={id}
          contact={name}
          phone={phone}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
