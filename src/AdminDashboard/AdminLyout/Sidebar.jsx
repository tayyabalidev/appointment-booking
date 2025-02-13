import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { Home, CalendarToday, PersonAdd, Group } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/dashboard"
            className="menu-item"
            activeClassName="active"
          >
            <Home fontSize="small" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/appointment"
            className="menu-item"
            activeClassName="active"
          >
            <CalendarToday fontSize="small" />
            <span>Appointments</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addDoctor"
            className="menu-item"
            activeClassName="active"
          >
            <PersonAdd fontSize="small" />
            <span>Add Doctor</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doctorList"
            className="menu-item"
            activeClassName="active"
          >
            <Group fontSize="small" />
            <span>Doctors List</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
