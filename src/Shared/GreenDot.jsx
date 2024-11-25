import React from "react";
import { Box, Typography } from "@mui/material";

const GreenDot = () => {
  return (
    <Box display="flex" alignItems="center" textAlign="center" gap={1}>
      {/* Green Dot */}
      <Box
        sx={{
          width: 8,
          height: 8,
          backgroundColor: "#2EC867",
          borderRadius: "50%",
        }}
      />
      {/* Text */}
      <Typography
        gutterBottom
        component="div"
        sx={{ color: "#2EC867", fontSize: "13px", marginTop: "3px" }}
      >
        Available
      </Typography>
    </Box>
  );
};

export default GreenDot;
