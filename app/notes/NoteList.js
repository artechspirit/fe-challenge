import React from "react";
import NoteCard from "../../components/NoteCard";
import { Grid } from "@mui/material";

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <NoteCard note={note} onDeleteNote={onDeleteNote} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NoteList;
