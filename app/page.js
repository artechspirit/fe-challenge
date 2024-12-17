"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import NoteForm from "../components/NoteForm";
import NoteList from "./notes/NoteList";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  const addNote = (note) => {
    const newNote = { id: nanoid(), ...note };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://94.74.86.174:8080/api/checklist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }

        const data = await response.json();
        setNotes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCards();
  }, []);

  return (
    <Box mt={4} mb={6}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        my={2}
        justifyContent="space-between"
      >
        <Typography variant="h4" gutterBottom>
          Google Keep Clone
        </Typography>

        <Button variant="contained" color="primary" onClick={handleLogout}>
          Log Out
        </Button>
      </Box>

      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </Box>
  );
}
