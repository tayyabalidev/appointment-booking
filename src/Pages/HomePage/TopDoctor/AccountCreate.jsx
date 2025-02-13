import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import appoinment_img from "../../../Assest/assets_frontend/appointment_img.png";

const AccountCreate = () => {
  return (
    <>
      <Box mt={5}>
        <Grid
          container
          xs={12}
          sx={{
            width: "78%",
            backgroundColor: "#5F6FFF",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          <Grid xs={6} container>
            <Box ml={5} sx={{ marginTop: "90px" }}>
              <Typography variant="h3" color="white" sx={{ fontWeight: "600" }}>
                Book Appointment With 100+ Trusted Doctors
              </Typography>
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "gray",
                  borderRadius: "10px",
                  padding: "10px",
                  mt: "25px",
                }}
              >
                <Link to="/accountButton">Create Account</Link>
              </Button>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box>
              <img
                src={appoinment_img}
                alt="appoinment_img"
                style={{
                  width: "75%",
                  marginBottom: "-4px",
                  paddingTop: "15px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AccountCreate;
