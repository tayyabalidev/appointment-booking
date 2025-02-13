import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import doctor_icon from "../../Assest/assets_admin/doctor_icon.svg";
import profile_pic from "../../Assest/assets_frontend/profile_pic.png";

const appointments = [
  {
    id: 1,
    patient: "Richard James",
    department: "Richard James",
    age: 28,
    date: "24th July, 2024, 10:AM",
    doctor: "Dr. Richard James",
    fees: "$50",
  },
  {
    id: 2,
    patient: "Richard James",
    department: "Richard James",
    age: 28,
    date: "24th July, 2024, 10:AM",
    doctor: "Dr. Richard James",
    fees: "$50",
  },
];

const Appointment = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        All Appointments
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "10px", boxShadow: "none", overflow: "hidden" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
              <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Patient</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date & Time</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Doctor</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Fees</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {appointments.map((appointment, index) => (
              <TableRow key={appointment.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <img src={doctor_icon} sx={{ width: 4 }} />
                  {appointment.patient}
                </TableCell>
                <TableCell>{appointment.department}</TableCell>
                <TableCell>{appointment.age}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <img src={doctor_icon} sx={{ width: 3, height: 3, mr: 1 }} />
                  {appointment.doctor}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#28a745" }}>
                  {appointment.fees}
                </TableCell>
                <TableCell>
                  <IconButton size="small" sx={{ color: "red" }}>
                    <Close />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Appointment;
