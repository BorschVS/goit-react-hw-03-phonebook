import React from 'react';
import ContactItem from 'components/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.ContactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={deleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
