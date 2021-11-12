import React, { useState } from 'react';
import './AddContactForm.scss';

export const AddContactForm = ({ setContacts, contacts }) => {
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
          className="button"
        >
          Add contact
        </button>
      </div>

    </form>
  );
};
