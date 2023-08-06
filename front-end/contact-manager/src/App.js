import './App.css';
import { useState } from "react";
import Navbar from "./componants/navbar/navbar.jsx";
import Contact from "./componants/contact/index.jsx";
import { Routes, Route } from 'react-router-dom';


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
        </>}>

        </Route>
        <Route path="/map" element={<><Navbar/><h1>Good Morning</h1></>}/>

      </Routes>

      </header>
      <main className="App-main">
        <Routes>
          <Route path='/' element={
          <>
            <Contact/>
          </>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
