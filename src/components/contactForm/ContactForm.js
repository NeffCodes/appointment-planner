import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  //handle functions
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input
        type="text"
        id="name"
        aria-label="Name"
        placeholder="John"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        aria-label="Phone Number"
        placeholder="(000) 000-0000"
        pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
        value={phone}
        onChange={handlePhoneChange}
        required
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        aria-label="Email"
        placeholder="example@nowhere.com"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <input type="submit" value="Add"/>
    </form>
  );
};
