import './App.css';
import { useState } from "react";
import Navbar from "./componants/navbar/navbar.jsx";
import Contacts from "./componants/contacts/contacts.jsx";
import Map from "./componants/map/index.jsx";

import { Routes, Route } from 'react-router-dom';
import ContactForm from './componants/contactForm/contactFrom';

function App() {
  const [contacts, setContacts] = useState([
    {
      first_name: "Ahmad",
      last_name: "Eid",
      number: "(+961)70881098",
      longitude: 0,
      lattitude: 0,
    }
  ]);
  
  return (

    <div className="App">
      <header className="App-header">

      <Routes>
        <Route path="/" element={
        <>
          <Navbar/>
        </>
      }/>
        <Route path="/map" element={<><Navbar/><Map/></>}/>
        <Route path="/create-contact" element={<><Navbar/><main><ContactForm/></main></>}/>

      </Routes>

      </header>
      <main className="App-main">
        {/* <Contacts/> */}
      </main>
    </div>
  );
}

export default App;
