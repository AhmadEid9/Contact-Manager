import axios from "axios";
import { useEffect, useState } from "react";
import Contacts from "../contacts/contacts";
import Contact from "../contact";

const ContactsList = (props)=>{
  let response;
  const fetchContacts = async ()=>{
    await axios.get("http://localhost:8000/api/contacts")
    .then((response)=> {props.setContacts(response.data)
    console.log(response.data)})
    .catch((e) => console.log(e));
    
  }
  useEffect(()=>{
    fetchContacts()
  }, [])

  return (
    <div>
      <Contacts contacts={props.contacts}/>
    </div>
  )
}

export default ContactsList;