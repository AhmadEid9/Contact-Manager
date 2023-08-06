import React from "react";
import "./style.css";

const Contact = (name, number, longitude, lattitude) => {
  let name_check = "name";
  let number_check = "number";
  let longitude_check = "longitude";
  let lattitude_check = "lattitude";
  return (
    <div className="contact">
      <p>{name_check}</p>
      <p>{number_check}</p>
      <p>{longitude_check}</p>
      <p>{lattitude_check}</p>
    </div>
  );
};

export default Contact;