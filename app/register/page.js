import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Box, Typography } from "@mui/material";

export default function RegisterPage() {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Create an Account
      </Typography>
      <RegisterForm />
    </Box>
  );
}
