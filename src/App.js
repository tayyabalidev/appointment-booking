import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PageLayout from './Commponents/Layout/PageLayout';
import Home from './Pages/HomePage/Home';
import AllDoctors from './Pages/AllDoctors/AllDoctors';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import AccountButton from './Pages/AccountButton/AccountButton';
import GeneralPhysician from './Pages/AllDoctors/GeneralPhysician/GeneralPhysician';
import AdminLogin from './Commponents/Layout/AdminLogin';
import BookingSlots from './Shared/BookingSlots/BookingSlots';
import DoctorDetails from './Pages/DoctorDetaild/DoctorDetails';

function App() {
  return (
    <Routes>
      <Route path='/adminLogin' element={<AdminLogin />} />
      <Route path='/' element={<PageLayout />} >
        <Route path='/home' element={<Home />} />
        <Route path='/allDoctors' element={<AllDoctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/adminPanel' element={<AdminPanel />} />
        <Route path='/accountButton' element={<AccountButton />} />
        <Route path='/doctorDetails/:id' element={<DoctorDetails />} />
      </Route>
    </Routes>

  );
}

export default App;
