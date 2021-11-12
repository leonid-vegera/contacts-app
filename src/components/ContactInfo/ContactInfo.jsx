import React from 'react';
import './ContactInfo.scss';

export const ContactInfo = ({ contact }) => {
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
          <div className="contact-info-key">{item[0] !== 'id' ? item[0] : ''}</div>
          <div className="contact-info-value">{item[0] !== 'id' ? item[1] : ''}</div>
        </section>
      ))}
    </div>
  )
};
