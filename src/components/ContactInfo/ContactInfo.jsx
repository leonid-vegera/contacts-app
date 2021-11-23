import React, { useState, useContext } from 'react';
import { ContactsContext } from '../../utils/ContactsContext';
import { Field } from '../Field';
import './ContactInfo.scss';

export const ContactInfo = () => {
  const [newField, setNewField] = useState('');
  const [newValue, setNewValue] = useState('');

  const { selectedContact } = useContext(ContactsContext);

  let entries = null;
  if (!selectedContact) {
    return;
  }
  entries = Object.entries(selectedContact);

  const addField = (newNote, newValue) => {
    const newSection = {
      [newNote]: newValue,
    };
    Object.assign(selectedContact, newSection)
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
