import axios from "axios";
import { useEffect, useState } from "react";

const ContactsList = ()=>{
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async ()=>{
    const response = await axios.get("http://localhost:8000/contacts");
    setContacts(response.data)
  }
  useEffect(()=>{
    fetchContacts()
  }, [])

  return (
    <div>
      <h1>Contacts</h1>
      <Contacts setContacts={setContacts}/>
      
    </div>
  )
}

export default Contacts