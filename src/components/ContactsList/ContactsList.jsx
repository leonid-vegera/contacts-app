import React from 'react';
import './ContactsList.scss';

export const ContactsList = ({ contacts, setSelectedId, selectedId, removeContact }) => {
  return (
    <div className="contacts-list">
      <h2 className="title">Contacts</h2>
      {contacts.map(contact => (
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
