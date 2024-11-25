import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
const AccountButton = () => {
  return (
    <Box
      sx={{
        width: "26%",
        padding: "20px",
        margin: "auto",
        border: "1px solid #E9EBEE",
        marginTop: "50px",
        borderRadius: "10px",
        boxShadow: 1,
      }}
    >
      <Typography color="#727272" fontSize="20px" fontWeight="600" mb={1}>
        Create Account
      </Typography>
      <span style={{ color: "gray" }}>Please sign up to book appointment</span>
      <Box sx={{ lineHeight: "80px", marginTop: "20px" }}>
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          fullWidth
        />
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
        Create Account
      </Button>
      <Typography color="gray" fontSize="13px" mt={1}>
        Already have an account? <Link>Login here</Link>{" "}
      </Typography>
    </Box>
  );
};

export default AccountButton;
