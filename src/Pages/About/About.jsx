import { Box, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import "./About.css";
import about_image from "../../Assest/assets_frontend/about_image.png";
import { CenterFocusStrong } from "@mui/icons-material";
const About = () => {
  return (
    <Box>
      <Typography
        sx={{ color: "gray", textAlign: "center", marginTop: "50px" }}
      >
        ABOUT <span style={{ color: "black", fontWeight: "600" }}>US</span>
      </Typography>
      <Box sx={{ width: "70%", margin: "auto" }}>
        <Grid container mt={5}>
          <Grid xs={5} container>
            <Typography>
              <img
                src={about_image}
                alt="about image"
                style={{ width: "90%" }}
              />
            </Typography>
          </Grid>
          <Grid xs={7}>
            <Typography mt={4} sx={{ fontSize: "12px", color: "gray" }}>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
              <br />
              <br />
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
              <br />
              <br />
              <span style={{ color: "black", fontWeight: "600" }}>
                Our Vision
              </span>
              <br />
              <br />
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </Typography>
          </Grid>
        </Grid>
        {/*  */}
        <Typography mt={9}>
          WHY <span style={{ fontWeight: "600" }}>CHOOSE US</span>
        </Typography>
        <Box>
          <Grid container mt={3}>
            <Grid xs={4}>
              <Box className="about-card">
                <Typography>EFFICIENCY:</Typography>
                <Typography mt={2} fontSize={13}>
                  Streamlined appointment scheduling that fits into your busy
                  lifestyle.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box className="about-card">
                <Typography> CONVENIENCE:</Typography>
                <Typography mt={2} fontSize={13}>
                  Access to a network of trusted healthcare professionals in
                  your area.
                </Typography>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box className="about-card">
                <Typography>PERSONALIZATION:</Typography>
                <Typography mt={2} fontSize={13}>
                  Tailored recommendations and reminders to help you stay on top
                  of your health.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
