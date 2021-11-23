import React, { useState } from 'react';
import './App.scss';
import { useLocalStorage } from './utils/useLocalStarage';
import { AddContactForm } from './components/AddContactForm';
import { ContactsList } from './components/ContactsList';
import { ContactInfo } from './components/ContactInfo';
import { ContactsContext } from './utils/ContactsContext';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(contact => (
    contact.id === selectedId
  ))

  const addContact = (newContact) => {
    setContacts(
      [...contacts,
        newContact
      ]
    )
  }

  const selectId = (id) => {
    setSelectedId(id)
  }

  const removeContact = (contactId) => {
    /* eslint-disable-next-line */
    const result = confirm('Do you really want to delete this contact?')
    if (result) {
      setContacts(contacts.filter(item => (
        contactId !== item.id
      )))
    }
  }

  const changeContact = (changedContact) => {
    setContacts(changedContact)
  }

  return (
    <div className="main">
      <ContactsContext.Provider value={{
        addContact: addContact,
        contacts,
        selectedContact,
        selectedId,
        selectId,
        removeContact,
        changeContact,
      }}>
        <AddContactForm />
        <ContactsList />

        {selectedId !== 0 && (
          <ContactInfo />
        )}
      </ContactsContext.Provider>
    </div>
  );
}

export default App;
