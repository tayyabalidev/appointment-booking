import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "35px",
        }}
      >
        <Button
          className="More-doc"
          sx={{
            backgroundColor: "#EAEFFF",
            textAlign: "center",
            padding: "10px 20px",
          }}
        >
          <Link
            to="/allDoctors"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            More
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default More;
