import React, { useState } from "react";
import upload_area from "../../Assest/assets_admin/upload_area.svg";
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Select,
  InputLabel,
  FormControl,
  Box,
  Grid,
} from "@mui/material";
import "./AddDoctor.css";
const AddDoctor = () => {
  const [formData, setFormData] = useState({
    profileImage: null,
    name: "",
    email: "",
    password: "",
    specialty: "General physician",
    degree: "",
    address1: "",
    address2: "",
    experience: "1 Year",
    fees: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profileImage: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box className="add-doctor">
      <Grid
        item
        xs={12}
        mb={3}
        md={6}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <img
          src={formData.profileImage || upload_area}
          alt="Profile"
          style={{ width: 100, height: 100, borderRadius: "50%" }}
        />
        <Typography color="gray" component="label" sx={{ marginLeft: 2 }}>
          Upload Doctor <br /> Picture
          <input type="file" hidden onChange={handleImageChange} />
        </Typography>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Doctor Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Set Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Specialty</InputLabel>
              <Select
                label="Specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
              >
                <MenuItem value="General physician">General physician</MenuItem>
                <MenuItem value="Cardiologist">Cardiologist</MenuItem>
                <MenuItem value="Dermatologist">Dermatologist</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Address 1"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Address 2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Experience</InputLabel>
              <Select
                label="Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <MenuItem value="1 Year">1 Year</MenuItem>
                <MenuItem value="2 Years">2 Years</MenuItem>
                <MenuItem value="3 Years">3 Years</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Fees"
              name="fees"
              value={formData.fees}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Add Doctor
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddDoctor;
