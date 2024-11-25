import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import group_profile from "../../Assest/assets_frontend/group_profiles.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import header_img from "../../Assest/assets_frontend/header_img.png";
import FindSpecialty from "../HomePage/FindSpecialty/FindSpecialty";
import TopDoctor from "./TopDoctor/TopDoctor";

const Home = () => {
  return (
    <>
      <Box className="Home-section">
        <Grid container spacing={2} sx={{ textAlign: "center" }}>
          <Grid item xs={12} container>
            <Grid item xs={6}>
              <Box className="Home-left-side">
                <Typography variant="h3" className="Home-left-side-title">
                  Book Appointment With Trusted Doctors
                </Typography>
                <Box className="Home-left-side-content">
                  <Typography>
                    <img src={group_profile} alt="" />
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    Simply browse through our extensive list of trusted doctors,
                    schedule your appointment hassle-free.
                  </Typography>
                </Box>
                <Box className="Book-appointment" mt={3}>
                  <Typography
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    Book appointment
                    <ArrowRightAltIcon />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="home-right-side-img">
                <img
                  src={header_img}
                  alt="doctor image"
                  style={{ width: "90%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/*  */}

      <Box>
        <FindSpecialty />
      </Box>
      {/*  */}
      <Box>
        <TopDoctor />
      </Box>
    </>
  );
};

export default Home;
