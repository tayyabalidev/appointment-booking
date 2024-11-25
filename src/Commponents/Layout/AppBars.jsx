import React from "react";
import "./AppBars.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import adminlogo from "../../Assest/assets_admin/adminlogo.svg";
import { NavLink } from "react-router-dom";

export default function AppBars() {
  return (
    <Box sx={{ flexGrow: 1 }} className="appbar">
      <AppBar position="static" className="section">
        <Toolbar sx={{ backgroundColor: "transparent" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={adminlogo} alt="Logo" style={{ height: "40px" }} />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <NavLink className="item-bar" to="/home">
              HOME
            </NavLink>
            <NavLink className="item-bar" to="/allDoctors">
              ALL DOCTORS
            </NavLink>
            <NavLink className="item-bar" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="item-bar" to="/contact">
              CONTACT
            </NavLink>
            <NavLink className="admin-button" to="/adminLogin">
              Admin Panel
            </NavLink>
          </Box>
          <NavLink className="create-button" to="/accountButton">
            Create account
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
