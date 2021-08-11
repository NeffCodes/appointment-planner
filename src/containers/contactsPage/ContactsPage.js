import React, {useState, useEffect} from "react";

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, addContact}) => {
  //local states
  const [name, setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate,setDuplicate] = useState(false);

  //check for duplicate contact name
  useEffect( ()=>{
    let checker = contacts.map( contact => contact.name ).indexOf(name);
    if(checker !== -1){
      setDuplicate(true);
      console.log('Duplicate name entry');
    } else {
      setDuplicate(false);
    }
  },[contacts, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add contact info and clear data if the contact name is not a duplicate
    if(!duplicate){
      //callback function from prop to set contact
      addContact(name,phone,email);
      //set back to default
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          arrayList={contacts}
        />
      </section>
    </div>
  );
};
