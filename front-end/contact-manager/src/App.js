import './App.css';
import Navbar from "./componants/navbar/navbar.jsx";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <header className="App-header">
      
      <Routes>
        <Route path="/" element={<Navbar/>}>

        </Route>
        <Route path="/posts" element={<><Navbar/><h1>Good Morning</h1></>}/>

      </Routes>

      </header>
    </div>
  );
}

export default App;
