import React from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import doctor_icon from "../../Assest/assets_admin/doctor_icon.svg";
import appointments_icon from "../../Assest/assets_admin/appointments_icon.svg";
import patients_icon from "../../Assest/assets_admin/patients_icon.svg";
import appointment_icon from "../../Assest/assets_admin/appointment_icon.svg";

const appointments = [
  {
    id: 1,
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    avatar: doctor_icon,
  },
  {
    id: 2,
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    avatar: doctor_icon,
  },
  {
    id: 3,
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    avatar: doctor_icon,
  },
  {
    id: 4,
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    avatar: doctor_icon,
  },
  {
    id: 5,
    name: "Dr. Richard James",
    date: "Booking on 24th July, 2024",
    avatar: doctor_icon,
  },
];

const Dashboard = () => {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Appointment Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img src={doctor_icon} alt="Doctors" width={70} />
            <Box sx={{ ml: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                14
              </Typography>
              <Typography variant="h6">Doctors</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img src={appointments_icon} alt="Appointments" width={70} />
            <Box sx={{ ml: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                2
              </Typography>
              <Typography variant="h6">Appointment</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img src={patients_icon} alt="Patients" width={70} />
            <Box sx={{ ml: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                5
              </Typography>
              <Typography variant="h6">Patients</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={4} width={700}>
        <Paper sx={{ p: 3, borderRadius: "10px" }}>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <img
              src={appointment_icon}
              alt="Latest Appointments"
              width={30}
              style={{ marginRight: 8 }}
            />
            Latest Appointment
          </Typography>
          {appointments.map((appointment) => (
            <Box
              key={appointment.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1,
                borderBottom: "1px solid #ddd",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={appointment.avatar}
                  sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {appointment.name}
                  </Typography>
                  <Typography sx={{ color: "gray", fontSize: "14px" }}>
                    {appointment.date}
                  </Typography>
                </Box>
              </Box>
              <IconButton size="small" sx={{ color: "red" }}>
                <Close />
              </IconButton>
            </Box>
          ))}
        </Paper>
      </Box>
    </>
  );
};

export default Dashboard;
