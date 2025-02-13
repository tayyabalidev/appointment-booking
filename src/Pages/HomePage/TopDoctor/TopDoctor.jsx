import "./TopDoctor.css";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { doctors } from "../../../utils/jsonData";
import appoinment_img from "../../../Assest/assets_frontend/appointment_img.png";

import GreenDot from "../../../Shared/GreenDot";
import { Link } from "react-router-dom";
import More from "./More";
import AccountCreate from "./AccountCreate";
const TopDoctor = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        mt={8}
        sx={{ textAlign: "center", fontWeight: "600" }}
      >
        Top Doctors to Book
      </Typography>
      <Typography mt={1} sx={{ textAlign: "center", color: "gray" }}>
        Simply browse through our extensive list of trusted doctors.
      </Typography>
      {/*top doctor  */}
      <Box className="top-doctor-card">
        <Grid container spacing={3} mt={5}>
          {doctors.map((doctor) => (
            <Grid item xs={12} sm={6} md={3} key={doctor.id}>
              <Card
                sx={{
                  maxWidth: 255,
                  borderRadius: "10px",
                  border: "1px solid #C9D8FF",
                }}
              >
                <Link
                  to={`/doctorDetails/${doctor.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardActionArea
                    sx={{
                      "&:hover": {
                        backgroundColor: "#fff",
                        boxShadow: "none",
                      },
                      transition: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      sx={{ backgroundColor: "#EAEFFF" }}
                      image={doctor.image}
                      alt={doctor.name}
                    />
                    <CardContent>
                      <GreenDot />
                      <Typography
                        variant="body2"
                        sx={{ color: "black", fontWeight: "700" }}
                      >
                        {doctor.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {doctor.position}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TopDoctor;
