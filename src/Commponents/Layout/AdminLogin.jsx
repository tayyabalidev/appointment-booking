import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const AdminLogin = () => {
  return (
    <Box
      sx={{
        width: "26%",
        padding: "20px",
        margin: "auto",
        border: "1px solid #E9EBEE",
        marginTop: "100px",
        borderRadius: "10px",
        boxShadow: 1,
      }}
    >
      <Typography textAlign="center" fontSize="20px" fontWeight="600" mb={1}>
        <span style={{ color: "royalblue" }}>Admin</span> Login
      </Typography>
      <Box sx={{ lineHeight: "80px", marginTop: "20px" }}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Button
        sx={{
          width: "100%",
          backgroundColor: "royalblue",
          color: "white",
        }}
      >
        Login
      </Button>
      <Typography color="gray" fontSize="13px" mt={1}>
        Doctor Login?<Link>Click here</Link>{" "}
      </Typography>
    </Box>
  );
};

export default AdminLogin;
