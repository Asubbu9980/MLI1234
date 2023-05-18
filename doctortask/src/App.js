
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patients from './Patients';
import Register from './Components/Register';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Register/>}/>
        
          <Route  path="/patients"element={<Patients />} />
          
          
          
        
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
