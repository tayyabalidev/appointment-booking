import { Box, Button, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const payload = { email, password };
      const response = await axios.post(`${API_BASE_URL}/auth/login`, payload, {
        headers: { "Content-Type": "application/json" },
      });

      const token = response.data?.token; // ✅ Token extract karna zaroori hai
      if (token) {
        localStorage.setItem("token", token); // ✅ Token save
        navigate("/home"); // ✅ Redirect to home
      } else {
        setError("Invalid login response!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "26%",
        padding: "30px",
        margin: "auto",
        border: "1px solid #E9EBEE",
        marginTop: "100px",
        borderRadius: "10px",
        boxShadow: 1,
        textAlign: "center",
      }}
    >
      <Typography fontSize="20px" fontWeight="600">
        Login
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "gray", mb: 2 }}>
        Please login to access the dashboard
      </Typography>

      {error && (
        <Typography color="red" fontSize="14px" mb={2}>
          {error}
        </Typography>
      )}

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Button
        onClick={handleLogin}
        disabled={loading}
        sx={{
          width: "100%",
          backgroundColor: "royalblue",
          color: "white",
          "&:hover": { backgroundColor: "#1E3A8A" },
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>

      <Typography color="gray" fontSize="13px" mt={2}>
        Doctor Login? <a href="./">Click here</a>
      </Typography>
    </Box>
  );
};

export default Login;
