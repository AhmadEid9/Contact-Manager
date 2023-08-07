import Contact from "../contact";
import "../contact/style.css"

const Contacts = (props) => {
    return (props.contacts.map((contact) => {
       return <div className="contact">
        <Contact cname={contact.name}
        number={contact.number}
        longitude={contact.longitude}
        lattitude={contact.lattitude}
        key={contact.name}/>
        </div>
})      
    );
  };
  
  export default Contacts;