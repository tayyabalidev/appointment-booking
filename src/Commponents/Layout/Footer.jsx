import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import adminlogo from "../../Assest/assets_admin/adminlogo.svg";
const Footer = () => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        fontFamily: "'Raleway', serif",
      }}
    >
      <Grid container mt={9}>
        <Grid container xs={5}>
          <Box>
            <Typography mt={7}>
              <img src={adminlogo} alt="adminlogo" />
            </Typography>
            <Typography
              mt={1}
              sx={{ fontSize: "13px", fontWeight: "600", color: "#827f7f" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
        </Grid>
        <Grid container mt={7} xs={7}>
          <Grid xs={12} container>
            <Grid xs={6}>
              <Typography variant="h6" ml={2} sx={{ fontWeight: "600" }}>
                Company
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                  color: "#827f7f",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "25px",
                }}
              >
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </Grid>
            <Grid xs={6}>
              <Typography variant="h6" ml={3} sx={{ fontWeight: "600" }}>
                GET IN TOUCH
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                  color: "#827f7f",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "25px",
                }}
              >
                <li>+0-000-000-000</li>
                <li>tayyabali.02460@gmail.com</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        sx={{
          borderTop: "1px solid #c4c2c2",
          color: "#c4c2c2",
          margin: "auto",
        }}
      >
        Copyright 2024 @ gokboru.dev - All Right Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
