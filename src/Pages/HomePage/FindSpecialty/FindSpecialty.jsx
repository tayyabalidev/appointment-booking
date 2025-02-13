import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import General_physician from "../../../Assest/assets_frontend/General_physician.svg";
import Gynecologist from "../../../Assest/assets_frontend/Gynecologist.svg";
import Dermatologist from "../../../Assest/assets_frontend/Dermatologist.svg";
import Pediatricians from "../../../Assest/assets_frontend/Pediatricians.svg";
import Neurologist from "../../../Assest/assets_frontend/Neurologist.svg";
import Gastroenterologist from "../../../Assest/assets_frontend/Gastroenterologist.svg";
import "./FindSpecialty.css";

const FindSpecialty = () => {
  const specialties = [
    {
      name: "General Physician",
      image: General_physician,
      query: "general-physician",
    },
    { name: "Gynecologist", image: Gynecologist, query: "gynecologist" },
    { name: "Dermatologist", image: Dermatologist, query: "dermatologist" },
    { name: "Pediatricians", image: Pediatricians, query: "pediatricians" },
    { name: "Neurologist", image: Neurologist, query: "neurologist" },
    {
      name: "Gastroenterologist",
      image: Gastroenterologist,
      query: "gastroenterologist",
    },
  ];

  return (
    <Box mt={5} sx={{ textAlign: "center" }}>
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        Find by Specialty
      </Typography>
      <Typography mt={1} sx={{ fontSize: "15px", color: "gray" }}>
        Simply browse through our extensive list of trusted doctors,
        <br /> schedule your appointment hassle-free.
      </Typography>
      <Box sx={{ width: "70%", margin: "auto" }}>
        <Grid mt={5} container sx={{ textAlign: "center" }}>
          {specialties.map((specialty, index) => (
            <Grid item xs={2} key={index}>
              <Link
                to={`/allDoctors?category=${specialty.query}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box className="specialty-img">
                  <img src={specialty.image} alt={specialty.name} />
                </Box>
                <Typography className="specialty-text">
                  {specialty.name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FindSpecialty;
