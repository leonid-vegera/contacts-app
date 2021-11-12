import React, { useState } from 'react';
import './ContactsList.scss';

export const ContactsList = ({ contacts, setSelectedId, selectedId, removeContact }) => {
  const [query, setQuery] = useState('');

  const newQuery = query.toLocaleLowerCase();
  let visibleContacts;
  if (!query) {
    visibleContacts = contacts;
  } else {
    visibleContacts = contacts.filter(contact => 
      contact.name.toLowerCase().startsWith(newQuery))
  }

  return (
    <div className="contacts-list">
      <h2 className="title">Contacts</h2>

      <input
        className="contacts-input"
        type="text"
        name="query"
        placeholder="Enter first letters to find contact"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
        }}
      />

      {visibleContacts.map(contact => (
        <div key={contact.id} className="contacts-item">
          <strong>{contact.name.toUpperCase()}</strong>
          <div className="contacts-list-buttons">

            <button
              type="button"
              className="button contacts-list-button"
              onClick={() => {
                removeContact(contact.id)
              }}
              disabled={contact.id === selectedId}
            >
              Delete
            </button>

            {contact.id !== selectedId ? (
              <button
                type="button"
                className="button contacts-list-button"
                onClick={() => {
                  setSelectedId(contact.id)
                }}
              >
                Open
              </button>
            ) : (
              <button
                type="button"
                className="button contacts-list-button"
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
  )
};
