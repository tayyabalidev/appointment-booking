import React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import adminlogo from "../../../Assest/assets_admin/adminlogo.svg";

export default function AppBars() {
  return (
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar position="static" className="section">
        <Toolbar
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src={adminlogo}
              alt="Logo"
              className="navbar-img"
              style={{ height: "50px" }}
            />
          </IconButton>

          <NavLink
            className="create-button"
            to="/loginButton"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            Log Out
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
