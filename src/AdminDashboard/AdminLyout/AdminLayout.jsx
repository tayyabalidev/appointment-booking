import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar/Navbar";

const AdminLayout = () => {
  return (
    <div style={styles.container}>
      <Navbar style={styles.navbar} />
      <div style={styles.content}>
        <Sidebar style={styles.sidebar} />
        <div style={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  navbar: {
    // Add specific styling for the navbar if needed
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    height: "100vh",
    boxSizing: "border-box",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#F8F9FD",

    overflowY: "auto",
  },
};

export default AdminLayout;
