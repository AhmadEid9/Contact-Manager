import React from "react";
import "./style.css";


const Contact = (contact) => {
  return (
    <div className="contact">
      <p>{contact.cname ? contact.cname : "name" }</p>
      <p>{contact.number ? contact.number : "number" }</p>
      <p>{contact.longitude ? contact.longitude : "longitude" }</p>
      <p>{contact.lattitude ? contact.lattitude : "lattitude" }</p>
    </div>
  );
};

export default Contact;