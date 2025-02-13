import { Grid, Typography, Box } from "@mui/material";
import "./Footer.css";
import React from "react";
import adminlogo from "../../../Assest/assets_admin/adminlogo.svg";
const Footer = () => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        fontFamily: "'Raleway', serif",
      }}
    >
      <Grid container mt={9} spacing={2}>
        {/* Left Section */}
        <Grid item xs={12} sm={5}>
          <Box>
            <Typography>
              <img
                src={adminlogo}
                alt="adminlogo"
                style={{ maxWidth: "100px" }}
              />
            </Typography>
            <Typography
              mt={1}
              sx={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#827f7f",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} sm={7}>
          <Grid container spacing={2}>
            {/* Company Section */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  textAlign: { sm: "left" },
                }}
              >
                Company
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                  color: "#827f7f",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "25px",
                  textAlign: { sm: "left" },
                  padding: 0,
                }}
              >
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </Grid>

            {/* Get in Touch Section */}
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  textAlign: { sm: "left" },
                }}
              >
                GET IN TOUCH
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                  color: "#827f7f",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "25px",
                  textAlign: { xs: "center", sm: "left" },
                  padding: 0,
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
