import React, { useState } from 'react';
import { Field } from '../Field';
import './ContactInfo.scss';

export const ContactInfo = ({ contact, contacts, setContacts, selectedId }) => {
  const [newField, setNewField] = useState('');
  const [newValue, setNewValue] = useState('');

  let entries = null;
  if (!contact) {
    return;
  }
  entries = Object.entries(contact);

  const addField = (newNote, newValue) => {
    const newSection = {
      [newNote]: newValue,
    };
    Object.assign(contact, newSection)
  }

  const clearFields = () => {
    setNewField('');
    setNewValue('');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    addField(newField, newValue);
    clearFields();
  }

  return (
    <div className="contact-info main__form">
      <h2 className="title">Contact information</h2>
      {entries.map(item => (
        <section
          key={Math.random()}
          className="contact-info-list"
        >
          <Field
            setContacts={setContacts}
            selectedId={selectedId}
            contacts={contacts}
            item={item}
          />
        </section>
      ))}
      <hr></hr>

      <h3 className="title">
        Add new notes to this contact
      </h3>
      <form onSubmit={submitHandler}>
        <section className="contact-info-inputs">
          <input
            type="text"
            name="newField"
            placeholder="Enter note name"
            className="input"
            value={newField}
            onChange={(event) => {
              setNewField(event.target.value);
            }}
            required
          />
          <input
            type="text"
            name="newValue"
            placeholder="Enter note text"
            className="input"
            value={newValue}
            onChange={(event) => {
              setNewValue(event.target.value);
            }}
            required
          />
        </section>
        <button
          type="submit"
          className="button contact-info-button"
        >
          Add note
        </button>
      </form>

    </div>
  )
};
