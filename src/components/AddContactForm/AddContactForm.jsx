import React, { useState, useContext } from 'react';
import { ContactsContext } from '../../utils/ContactsContext';
import './AddContactForm.scss';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('+380');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [info, setInfo] = useState('');

  const { addContact, setOpenForm } = useContext(ContactsContext);

  const newContact = {
    name,
    number,
    email,
    birthday,
    info,
    id: +new Date(),
  };

  const clearFields = () => {
    setName('');
    setNumber('+380');
    setEmail('');
    setBirthday('');
    setInfo('');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    addContact(newContact);
    clearFields();
    setOpenForm(false);
  }

  return (
    <form
      className="add-form main__form"
      onSubmit={submitHandler}
    >
      <h2 className="title">Add new contact</h2>
      <label>
        Person's name
        <div className="add-field">
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            className="input"
            autoFocus={true}
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
            required
          />
        </div>
      </label>

      <label>
        Person's phone number
        <div className="add-field">
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            className="input"
            value={number}
            onChange={(event) => {
              setNumber(event.target.value)
            }}
          />
        </div>
      </label>

      <label>
        Person's e-mail
        <div className="add-field">
          <input
            type="email"
            name="email"
            placeholder="Enter e-mail"
            className="input"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>
      </label>

      <label>
        Person's birthday
        <div className="add-field">
          <input
            type="date"
            max="2015-01-01"
            name="birthday"
            className="input input-birthday"
            value={birthday}
            onChange={(event) => {
              setBirthday(event.target.value)
            }}
          />
        </div>
      </label>

      <label>
        Person's information
        <div className="add-field">
          <textarea
            name="info"
            placeholder="Enter additional information"
            className="input add-field-textarea"
            value={info}
            onChange={(event) => {
              setInfo(event.target.value)
            }}
          />
        </div>
      </label>

      <section className='add-form-buttons'>
        <button
          type="submit"
          className="button add-form-button"
        >
          Add contact
        </button>
        <button
          type="button"
          className="button add-form-button"
          onClick={() => {
            setOpenForm(false)
          }}
        >
          Exit
        </button>
      </section>
    </form>
  );
};
