import Contact from "../contact";
import axios from 'axios';

const Contacts = () => {
  let response;
  const fetchContacts = async ()=>{
    response = await axios.get("http://localhost:8000/api/contacts").catch((e) => {console.log(e);});
  }
  fetchContacts();
    return (
      <div className="flex column contacts">
        {response.data.map((contact) => (
          <Contact
            name={contact.name}
            number={contact.number}
            longitude={contact.longitude}
            lattitude={contact.lattitude}
          />
        ))}
      </div>
    );
  };
  
  export default Contacts;