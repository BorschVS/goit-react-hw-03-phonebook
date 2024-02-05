import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const LS_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.loadContactsFromLocalStorage();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.saveContactsToLocalStorage();
    }
  }

  loadContactsFromLocalStorage() {
    const storedContacts = localStorage.getItem(LS_KEY);
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      this.setState({ contacts: parsedContacts });
    }
  }

  saveContactsToLocalStorage() {
    const { contacts } = this.state;
    const parsedContacts = JSON.stringify(contacts);
    localStorage.setItem(LS_KEY, parsedContacts);
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  contactExists = currentName => {
    const { contacts } = this.state;
    return contacts.find(({ name }) => name === currentName) !== undefined;
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="Container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contains={this.contactExists} />
        <h2 className="subtitle">Contacts</h2>
        <Filter value={filter} onChange={this.findContact} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
