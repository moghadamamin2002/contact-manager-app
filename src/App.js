import './App.css';
import { useState } from 'react';
import { Route , Routes , useNavigate , Navigate } from 'react-router-dom';
import {Navbar , AddContact , VeiwContact , EditContact, Contact , Contacts } from "./component"



const App = () => {

  const[loading , setLoading] = useState(false); 
  const [getContacts , setContacts] =useState([])    
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to="/contacts"/>}/>
        <Route path='/contacts' element={<Contacts   contacts={getContacts} loading={loading}/>} />
        <Route path='/contacts/add' element={AddContact} />
        <Route path='/contacts/:contactId' element={VeiwContact} />
        <Route path='contacts/edit/:conatactId' element={EditContact} />
        
      </Routes>
    </div>
  ); 
};

export default App;