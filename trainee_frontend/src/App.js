import logo from './logo.svg';
import './App.css';

//components
import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // basename is used to remove trialing slash, but is not working
    <BrowserRouter basename={window.location.pathname.replace(/\/$/, '')}> 
     <NavBar />
     <Routes>
       <Route path='/' element={<CodeforInterview />} />
       <Route path='/add' element={<AddUser />} />
       <Route path='/all' element={<AllUsers />} />
       <Route path='/edit/:id' element={<EditUser />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
