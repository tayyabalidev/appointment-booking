import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import group_profile from "../../Assest/assets_frontend/group_profiles.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import header_img from "../../Assest/assets_frontend/header_img.png";
import FindSpecialty from "../HomePage/FindSpecialty/FindSpecialty";
import TopDoctor from "./TopDoctor/TopDoctor";
import More from "./TopDoctor/More";
import AccountCreate from "./TopDoctor/AccountCreate";

const Home = () => {
  return (
    <>
      <Box className="Home-section">
        <Grid
          container
          spacing={2}
          sx={{
            textAlign: "center",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1 } }}>
            <Box className="Home-left-side" sx={{ padding: { xs: 2, sm: 0 } }}>
              <Typography className="Home-left-side-title">
                Book Appointment With Trusted Doctors
              </Typography>
              <Box className="Home-left-side-content" sx={{ mt: 2 }}>
                <Typography className="Home-left-side-content-img">
                  <img src={group_profile} alt="trusted-doctor" />
                </Typography>
                <Typography
                  className="home-img-content"
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    mt: 2,
                    color: "white",
                  }}
                >
                  Simply browse through our extensive list of trusted doctors,
                  schedule your appointment hassle-free.
                </Typography>
              </Box>
              <Button
                sx={{
                  marginTop: "20px",
                  padding: { xs: "8px 16px", sm: "10px 20px" },
                  fontSize: { xs: "14px", sm: "16px" },
                }}
                className="home-button"
              >
                Book appointment
                <ArrowRightAltIcon />
              </Button>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              order: { xs: 1, sm: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <img
                src={header_img}
                alt="doctor image"
                className="home-right-side-img"
              />
            </Box>
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
      <Box>
        <More />
      </Box>
      <Box>
        <AccountCreate />
      </Box>
    </>
  );
};

export default Home;
