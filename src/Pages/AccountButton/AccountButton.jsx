import { Box, Button, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const AccountCreate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirm_password", confirmPassword);

      const response = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (err) {
      console.error("Error:", err.response);
      setError(
        err.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "24%",
        padding: "25px",
        margin: "auto",
        border: "1px solid #E9EBEE",
        marginTop: "50px",
        borderRadius: "10px",
        boxShadow: 1,
      }}
    >
      <Typography color="#5E5E5E" fontSize="20px" fontWeight="600">
        Create Account
      </Typography>
      <span style={{ color: "#5E5E5E", fontSize: "12px", fontWeight: "600" }}>
        Please sign up to book an appointment
      </span>

      {error && (
        <Typography color="red" fontSize="14px" mb={2}>
          {error}
        </Typography>
      )}

      <Box sx={{ lineHeight: "70px", marginTop: "20px" }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": { height: "40px" },
            "& .MuiInputLabel-root": { fontSize: "13px", top: "-6px" },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": { height: "40px" },
            "& .MuiInputLabel-root": { fontSize: "13px", top: "-6px" },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": { height: "40px" },
            "& .MuiInputLabel-root": { fontSize: "13px", top: "-6px" },
          }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": { height: "40px" },
            "& .MuiInputLabel-root": { fontSize: "13px", top: "-6px" },
          }}
        />
      </Box>

      <Button
        onClick={handleRegister}
        disabled={loading}
        sx={{
          width: "100%",
          backgroundColor: "royalblue",
          color: "white",
          mt: 2,
          "&:hover": { backgroundColor: "#1E3A8A" },
        }}
      >
        {loading ? "Creating Account..." : "Create Account"}
      </Button>

      <Typography color="gray" fontSize="13px" mt={1}>
        Already have an account? <Link to="/login">Login here</Link>
      </Typography>
    </Box>
  );
};

export default AccountCreate;
