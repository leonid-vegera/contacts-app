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
      <div className="main-left">
        <AddContactForm
          contacts={contacts}
          setContacts={setContacts}
        />
        {contacts.length === 0 ? (
          <h2 className="title">No contacts added yet</h2>
        ) : (
          <ContactsList
            contacts={contacts}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
            removeContact={removeContact}
          />
        )}
      </div>

      {selectedId !== 0 && (
        <div className="main-right">
          <ContactInfo
            contact={selectedPerson}
            contacts={contacts}
            setContacts={setContacts}
            selectedId={selectedId}
          />
        </div>
      )}
    </div>
  );
}

export default App;
