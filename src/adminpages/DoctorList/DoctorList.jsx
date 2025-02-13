// import "./DoctorList.css";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { doctors } from "../../utils/jsonData";
// import appoinment_img from "../../Assest/assets_frontend/appointment_img.png";
// import GreenDot from "../../../Shared/GreenDot";
import { Link } from "react-router-dom";
import TopDoctor from "../../Pages/HomePage/TopDoctor/TopDoctor";
const DoctorList = () => {
  return (
    <Box>
      {/*All doctor  */}
      <TopDoctor />
    </Box>
  );
};

export default DoctorList;
