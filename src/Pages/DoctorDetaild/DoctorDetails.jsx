import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import BookingSlots from "../../Shared/BookingSlots/BookingSlots";
import { doctors } from "../../utils/jsonData";
import InfoIcon from "@mui/icons-material/Info";
import { CardContent, CardMedia, Card, CardActionArea } from "@mui/material";
import verified_icon from "../../Assest/assets_frontend/verified_icon.svg";
import "./DoctorDetail.css";
const DoctorDetaile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    setDoctor(doctors.find((doctor) => doctor.id == id));
  }, [id]);

  const relatedDoctors = doctor
    ? doctors.filter(
        (d) => d.category === doctor.category && d.id !== doctor.id
      )
    : [];

  return (
    <Box sx={{ width: "92%", margin: "auto" }}>
      {doctor ? (
        <Grid container mt={1} spacing={2}>
          <Grid item xs={3}>
            <Typography>
              <img
                src={doctor.image}
                alt={doctor.name}
                style={{
                  width: "106%",
                  backgroundColor: "royalblue",
                  borderRadius: "10px",
                }}
              />
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Box
              ml={2}
              sx={{
                border: "1px solid gray",
                borderRadius: "10px",
                padding: "37px",
                fontMedium: "font-weight: 500;",
              }}
            >
              <Typography variant="h4" fontWeight="600" color="#3C4656">
                {doctor.name} <img src={verified_icon} alt="" />
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>{doctor.degree}</Typography>
                <Button color="#3C4656">{doctor.category}</Button>
                <Button
                  sx={{
                    border: " 1px solid rgb(202, 201, 201)",
                    borderRadius: "60px",
                    color: "gray",
                    padding: "2px",
                    fontSize: "10px",
                  }}
                >
                  {doctor.year}
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography mr={1} mt={1} fontSize="0.9rem" fontWeight="550">
                  About
                </Typography>
                <InfoIcon fontSize="15px" sx={{ marginTop: "1px" }} />
              </Box>

              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "510",
                }}
              >
                {doctor.about}
              </Typography>
              <Typography mt={3} fontSize="0.9rem" fontWeight="550">
                Appointment fee: {doctor.fee}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography mt={5} sx={{ textAlign: "center", color: "gray" }}>
          Select a doctor to view details.
        </Typography>
      )}

      <Box sx={{ float: "right" }}>
        <BookingSlots />
      </Box>
      <Box mt={5}>
        <Typography variant="h6">Related Doctors</Typography>
        <Typography variant="body2">
          Simply browse through our extensive list of trusted doctors.
        </Typography>
        <Grid container spacing={2} mt={2}>
          {relatedDoctors.map((relatedDoctor) => (
            <Grid item xs={4} key={relatedDoctor.id}>
              <Card
                sx={{
                  maxWidth: 255,
                  borderRadius: "10px",
                  border: "1px solid #C9D8FF",
                  margin: "8px",
                }}
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
                    image={relatedDoctor.image}
                    alt={relatedDoctor.name}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ color: "green", fontWeight: "600" }}
                    >
                      {relatedDoctor.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {relatedDoctor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {relatedDoctor.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DoctorDetaile;
