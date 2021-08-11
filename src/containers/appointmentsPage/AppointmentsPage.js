import React, {useState} from "react";

import { AppointmentForm  } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({appointments,addAppointment,contacts}) => {
  //local state variables
  const [title,setTitle] = useState('');
  const [contact,setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //callback function from prop to set contact
    addAppointment(title,contact,date,time);
    //set back to default
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm  
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          arrayList={appointments}
        />
      </section>
    </div>
  );
};
