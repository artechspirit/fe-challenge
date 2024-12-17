"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://94.74.86.174:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/login");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleRegister}
      sx={{ maxWidth: 400, margin: "0 auto", mt: 8 }}
    >
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
      >
        Register
      </Button>
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        onClick={() => router.push("/login")}
      >
        Back to Login
      </Button>
    </Box>
  );
};

export default RegisterForm;
