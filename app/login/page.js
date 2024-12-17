"use client";
import React, { useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) router.push("/");
  }, [router]);
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome Back
      </Typography>
      <LoginForm />
    </Box>
  );
}
