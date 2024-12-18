import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contactItem}>
            <Contact id={id} name={name} number={number} onDelete={() => handleDelete(id)} />
          </li>
        ))
      ) : (
        <li className={styles.noContacts}>No contacts found</li>
      )}
    </ul>
  );
};

export default ContactList;
