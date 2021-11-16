import React, { useState } from 'react';
import './App.scss';
import { AddContactForm } from './components/AddContactForm';
import { ContactsList } from './components/ContactsList';
import { ContactInfo } from './components/ContactInfo';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const selectedPerson = contacts.find(contact => (
    contact.id === selectedId
  ))

  const removeContact = (contactId) => {
    /* eslint-disable-next-line */
    const result = confirm('Do you really want to delete this contact?')
    if (result) {
      setContacts(contacts.filter(item => (
        contactId !== item.id
      )))
    }
  }

  return (
    <div className="main">
      <AddContactForm
        contacts={contacts}
        setContacts={setContacts}
      />

      <ContactsList
        contacts={contacts}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
        removeContact={removeContact}
      />

      {selectedId !== 0 && (
        <ContactInfo
          contact={selectedPerson}
          contacts={contacts}
          setContacts={setContacts}
          selectedId={selectedId}
        />
      )}
    </div>
  );
}

export default App;
