/* eslint-disable */
import React, { useState } from 'react';
import './App.scss';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const selectedPerson = contacts.find(contact => (
    contact.id === selectedId
  ))

  return (
    <div className="main">
      {/* <h1>Contacts</h1> */}

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
            setContacts={setContacts}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        )}
      </div>

      {selectedId !== 0 && (
        <div className="main-right">
          <ContactInfo contact={selectedPerson} />
        </div>
      )}

      
    </div>
  );
}

export default App;

const AddContactForm = ({ setContacts, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const addContact = (name, number, email) => {
    const newContact = {
      name,
      number,
      email,
      id: +new Date(),
    };
    setContacts(
      [...contacts,
        newContact
      ]
    )
  }

  const clearFields = () => {
    setName('');
    setNumber('');
    setEmail('');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    addContact(name, number, email);
    clearFields();
  }

  return (
    <form
      className="add-form"
      onSubmit={submitHandler}
    >
      <h2 className="title">New contact form</h2>
      <div className="add-field">
        <label>
          Person's name
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter new name"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
              }}
              required
            />
          </div>
        </label>
      </div>

      <div>
        <label>
          Person's phone number
          <div className="add-field">
            <input
              type="tel"
              // pattern="[0-9]{10}"
              name="number"
              placeholder="Enter phone number"
              value={number}
              onChange={(event) => {
                setNumber(event.target.value)
              }}
              // required
            />
          </div>
        </label>
      </div>

      <div>
        <label>
          Person's e-mail
          <div className="add-field">
            <input
              type="email"
              name="email"
              placeholder="Enter e-mail"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              // required
            />
          </div>
        </label>
      </div>

      <div>
        <button
          type="submit"
        >
          Add contact
        </button>
      </div>

    </form>
  );
};

const ContactsList = ({ contacts, setContacts, setSelectedId, selectedId }) => {
  return (
    <>
      
      <div className="contacts-list">
        <h2 className="title">Contacts</h2>
        {contacts.map(contact => (
          <div key={contact.id} className="contacts-item">
            <strong>{contact.name.toUpperCase()}</strong>
            <div className="contacts-list-buttons">
              <button
                className="contacts-list-button"
                onClick={() => {
                  setContacts(contacts.filter(item => (
                    contact.id !== item.id
                  )))
                }}
                disabled={contact.id === selectedId}
              >
                Delete
              </button>
              {contact.id !== selectedId ? (
                <button
                  className="contacts-list-button"
                  onClick={() => {
                    setSelectedId(contact.id)
                  }}
                >
                  Open
                </button>
              ) : (
                <button
                  className="contacts-list-button"
                  onClick={() => {
                    setSelectedId(0)
                  }}
                >
                  Close
                </button>
              )}

            </div>
          </div>
        ))}
      </div >
    </>
  )
};

const ContactInfo = ({ contact }) => {
  let entries = null;
  if (!contact) {
    return;
  }
  entries = Object.entries(contact);
  
  console.log(entries);
  return (
    <div className="contact-info">
      <h2 className="title">Contact information</h2>
      {entries.map(item => (
        <section
          key={Math.random()}
          className="contact-info-list"
        >
          <div className="contact-info-key">{item[0]}</div>
          <div>{item[1]}</div>
        </section>
      ))}
    </div>
  )
}
