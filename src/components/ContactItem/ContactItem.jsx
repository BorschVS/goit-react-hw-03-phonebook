import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.ContactList__item} key={id}>
      <p className={css.text}>{name}</p>
      <a className={css.number} href="tel">
        {number}
      </a>
      <button className={css.Delete__button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
