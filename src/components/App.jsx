import { ContactForm } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./List/List";
import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contact')) ?? [])
  const [filter, setFilter] = useState('')

  
useEffect( () => {
  localStorage.setItem('contact', JSON.stringify(contacts));

}, [contacts])


  const onInputChange = filter => {
   setFilter(filter);
  };


  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };




  const deleteToDo = id => {
    setContacts((prevState) => prevState.filter(contact => contact.id !== id)) 
    }

  const onFormSubmit = info => {
    const isContactRepeat = contacts.find(
      el => el.name === info.name
    );
    if (isContactRepeat) {
      alert('Already in Contacts');
      return;
    }
    const contact = {
      ...info,
      id: nanoid(),
    };
    setContacts(prevState => ([...prevState, contact]));
  };


  
    const filteredContact = filteredContacts();
    return( 

      <div style={{
        width: 400,
        padding: "12px 16px",
        borderRadius: 20,
        backgroundColor: "#006d00",
        color: "white",
        textAlign: "center",
      }} >
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={onFormSubmit} btnText="Add contact" />

      <h2>Contacts</h2>
      <Filter onInputChange={onInputChange} />

      <ContactList data={filteredContact} deleteToDo={deleteToDo}/>
      
      </div>
    )

} 
 