import React, { useState } from "react";
import "./AppBars.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import adminlogo from "../../Assest/assets_admin/adminlogo.svg";
import { NavLink } from "react-router-dom";
import menu_icon from "../../Assest/assets_frontend/menu_icon.svg";

export default function AppBars() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="appbar">
      <AppBar position="static" className="section">
        <Toolbar sx={{ backgroundColor: "transparent" }}>
          {/* Logo */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img
              src={adminlogo}
              alt="Logo"
              className="appbar-img"
              style={{ height: "40px" }}
            />
          </IconButton>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
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

          {/* Create Account Button */}
          <NavLink
            className="create-button"
            to="/accountButton"
            style={{ display: { xs: "none", md: "block" } }}
          >
            Create account
          </NavLink>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <img src={menu_icon} alt="" />{" "}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <NavLink className="item-bar" to="/home">
                <ListItemText primary="HOME" />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink className="item-bar" to="/allDoctors">
                <ListItemText primary="ALL DOCTORS" />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink className="item-bar" to="/about">
                <ListItemText primary="ABOUT" />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink className="item-bar" to="/contact">
                <ListItemText primary="CONTACT" />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink className="admin-button" to="/adminLogin">
                <ListItemText primary="Admin Panel" />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink className="create-button" to="/accountButton">
                <ListItemText primary="Create account" />
              </NavLink>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
