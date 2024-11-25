import { Box, Typography, Grid, Button, colors } from "@mui/material";
import React from "react";
import contact_image from "../../Assest/assets_frontend/contact_image.png";
const Contact = () => {
  return (
    <Box sx={{ width: "60%", margin: "auto" }}>
      <Typography textAlign="center" marginTop="60px">
        CONTACT <span>US</span>
      </Typography>
      <Grid container mt={6}>
        <Grid container xs={6}>
          <Typography>
            <img
              src={contact_image}
              alt="contact image"
              style={{ width: "90%" }}
            />
          </Typography>
        </Grid>
        <Grid container xs={6}>
          <Box sx={{ marginTop: "20px" }}>
            <Typography fontWeight="600" color="#4B5563">
              OUR OFFICE
            </Typography>
            <br />

            <Typography color="gray" fontSize="14px">
              00000 Willms Station <br /> Suite 000, Washington, USA <br />
              <br />
              Tel: (000) 000-0000 <br /> Email: greatstackdev@gmail.com
            </Typography>
            <br />
            <Typography color="#4B5563" fontWeight="600">
              CAREERS AT PRESCRIPTO
            </Typography>

            <span style={{ fontSize: "14px", color: "gray" }}>
              Learn more about our teams and job openings.
            </span>
            <Button
              sx={{
                padding: "11px",
                border: "1px solid black",
                color: "black",
                mt: "15px",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              Explore Jobs
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
