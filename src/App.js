import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
//state variables
  const [appointments, setAppointments]=useState([]);
  const [contacts, setContacts]=useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

//add data functions
  const addContact = (name, phone, email) => {
    setContacts( prev => (
      [...prev,
        {name, phone,email}
      ]))
  }

  const addAppointment = (title, contact, date, time ) => {
    setAppointments( prev => (
      [...prev,
      {title, contact, date, time}
    ]))
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
