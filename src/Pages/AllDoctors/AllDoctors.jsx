import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { doctors } from "../../utils/jsonData";
import { Link, useLocation } from "react-router-dom";
import "./AllDoctor.css";

const AllDoctors = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryCategory = queryParams.get("category");

  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (queryCategory) {
      setActiveCategory(queryCategory);
    }
  }, [queryCategory]);

  const filteredDoctors = activeCategory
    ? doctors.filter(
        (doctor) =>
          doctor.category.toLowerCase().replace(/\s+/g, "-") ===
          activeCategory.toLowerCase()
      )
    : doctors;

  return (
    <>
      <div className="doctor-specialist">
        Browse through the doctors specialist.
      </div>
      <div style={{ display: "flex", width: "85%", margin: "auto" }}>
        <ul className="specialist-list">
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((category, index) => {
            const formattedCategory = category
              .toLowerCase()
              .replace(/\s+/g, "-");
            return (
              <li
                key={index}
                style={{
                  border: "1px solid #d3d1d1",
                  marginTop: index === 0 ? "0" : "12px",
                  padding: "8px 70px 8px 8px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  backgroundColor:
                    activeCategory === formattedCategory ? "#EAEFFF" : "white",
                }}
                onClick={() => setActiveCategory(formattedCategory)}
              >
                <span
                  style={{
                    color:
                      activeCategory === formattedCategory ? "#000" : "#878787",
                  }}
                >
                  {category}
                </span>
              </li>
            );
          })}
        </ul>

        <Grid container style={{ width: "80%" }}>
          {filteredDoctors.map((doctor) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={doctor.id}>
              <Card
                sx={{
                  maxWidth: 255,
                  borderRadius: "10px",
                  border: "1px solid #C9D8FF",
                  margin: "8px",
                }}
              >
                <Link
                  to={`/doctorDetails/${doctor.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardActionArea>
                    <Card
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
                        height="190"
                        sx={{ backgroundColor: "#EAEFFF" }}
                        image={doctor.image}
                        alt={doctor.name}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "green",
                          }}
                        >
                          <span
                            style={{
                              height: "8px",
                              width: "8px",
                              backgroundColor: "green",
                              borderRadius: "50%",
                              marginRight: "8px",
                            }}
                          ></span>
                          {doctor.position}
                        </Typography>

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
                          {doctor.category}
                        </Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default AllDoctors;
