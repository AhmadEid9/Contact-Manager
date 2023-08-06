import Contact from "../contact";

const Contacts = ({ contacts }) => {
    return (
      <div className="flex column contacts">
        {contacts.map((contact) => (
          <Contact
            name={contact.first_name + contact.last_name}
            number={contact.number}
            longitude={contact.longitude}
            lattitude={contact.lattitude}
            key={contact.name}
          />
        ))}
      </div>
    );
  };
  
  export default Contacts;