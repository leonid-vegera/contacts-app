import { useState, useContext } from 'react';
import { ContactsContext } from '../../utils/ContactsContext';
import './Field.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Field = ({ item }) => {
  const { changeContact, selectedId, contacts } = useContext(ContactsContext);

  const [value, setValue] = useState([item[1]]);
  const [isActive, setActive] = useState(false);

  const changeNote = (selectedId) => {
    /* eslint-disable-next-line */
    let result = confirm('Do you really want to save changes?')
    if (!result) {
      setValue([item[1]])
    } else {
      changeContact(
        contacts.map(contact => {
          if (contact.id !== selectedId) {
            return contact;
          }
          return {
            ...contact,
            [item[0]]: value,
          }
        })
      )
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    changeNote(selectedId);
    setActive(false);
  }

  return (
    <>
      <div className="contact-info-key">{item[0] !== 'id' ? item[0] : ''}</div>
      <div className="contact-info-string">
        <div
          title="Click to change"
          className={classNames("contact-info-value", {'field-not-active': isActive})}
          onClick={() => { setActive(!isActive) }}
        >
          {item[0] !== 'id' ? item[1] : ''}
        </div>

        <div>
          {!isActive ? (item[0] === 'id' ? '' : (
            <button
              type="button"
              className="field-edit-button"
              onClick={() => { setActive(!isActive) }}
            >
              Edit
            </button>
          ))
            : (
              <div className="field-changer">
                <form
                  onSubmit={submitHandler}
                >
                  <input
                    type="text"
                    value={value}
                    onChange={(event) => {
                      setValue(event.target.value)
                    }}
                  />
                  <button
                    type="submit"
                    className="field-edit-button"
                  >
                    Save changes
                  </button>

                  <button
                    type="button"
                    className="field-edit-button"
                    onClick={() => {
                      setActive(false);
                      setValue([item[1]]);
                    }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
          )}

          {/* <span
            title="click to delete"
            className="contact-info-remove"
            onClick={() => {
              setContacts(
                contacts.map(contact => {
                  if (contact.id !== selectedId) {
                    return contact;
                  }
                  return {
                    ...contact,
                    [item[0]]: '',  //! completely to delete
                  }
                })
              )
            }}
          >
            {item[0] !== 'id' ? 'x' : ''}
          </span> */}
        </div>

      </div>
    </>
  )
}

Field.propTypes = {
  item: PropTypes.array.isRequired,
}
