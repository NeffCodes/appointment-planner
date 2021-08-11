import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange = {onChange} >
      <option value="" key="default">Please select a Contact</option>
      {contacts.map( (contact,index) => (
        <option value={contact.name} key={index}>{contact.name}</option>
      ))}
    </select>
  );
};
