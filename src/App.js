import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PageLayout from "./Commponents/Layout/PageLayout";
import Home from "./Pages/HomePage/Home";
import AllDoctors from "./Pages/AllDoctors/AllDoctors";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import AccountButton from "./Pages/AccountButton/AccountButton";
import AdminLogin from "./AdminDashboard/AdminLyout/AdminLogin";
import DoctorDetails from "./Pages/DoctorDetaild/DoctorDetails";
import AdminLayout from "./AdminDashboard/AdminLyout/AdminLayout";
import Dashboard from "./adminpages/Dashboard/Dashboard";
import Appointment from "./adminpages/Appointment/Appointment";
import AddDoctor from "./adminpages/AddDoctor/AddDoctor";
import DoctorList from "./adminpages/DoctorList/DoctorList";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Login from "./LoginButton/Login";

const isAuthenticated = () => !!localStorage.getItem("token");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={isAuthenticated() ? "/home" : "/register"} replace />} />


      <Route path="/register" element={<AccountButton />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminLogin" element={<AdminLogin />} />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="allDoctors" element={<AllDoctors />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="adminPanel" element={<AdminPanel />} />
          <Route path="doctorDetails/:id" element={<DoctorDetails />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          <Route path="doctorList" element={<DoctorList />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;
