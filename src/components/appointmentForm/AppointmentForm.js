import React from "react";

import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  
  //handle functions
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }
  const handleContactChange = (e) => {
    setContact(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        aria-label="Title"
        placeholder="What is the appointment about?"
        value={title}
        onChange={handleTitleChange}
        required
      />

      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        aria-label="Date"
        min={getTodayString()}
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="time">Time</label>
      <input
        type="time"
        id="time"
        aria-label="Time"
        value={time}
        onChange={handleTimeChange}
        required
      />

      <ContactPicker 
        contacts={contacts}
        value={contact}
        onChange={handleContactChange}
      />

      <input type="submit" value="Add"/>
    </form>
  );
};
