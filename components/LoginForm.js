"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://94.74.86.174:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        router.push("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{ maxWidth: 400, margin: "0 auto", mt: 8 }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
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
        Login
      </Button>
      <Button
        sx={{ mt: 1 }}
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        onClick={() => router.push("/register")}
      >
        Register
      </Button>
    </Box>
  );
};

export default LoginForm;
