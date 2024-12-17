import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [isTodo, setIsTodo] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const note = isTodo
      ? { title, todoItems, color, isTodo }
      : { title, content, color, isTodo };
    onAddNote(note);
    setTitle("");
    setContent("");
    setTodoItems([]);
    setColor("#ffffff");
    setIsTodo(false);
  };

  const addTodoItem = () => {
    setTodoItems([...todoItems, { text: "", checked: false }]);
  };

  const handleTodoChange = (index, newValue) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].text = newValue;
    setTodoItems(updatedTodos);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={3}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={isTodo}
            onChange={(e) => setIsTodo(e.target.checked)}
          />
        }
        label="Checklist Todo"
      />

      {isTodo ? (
        <Box>
          {todoItems.map((item, index) => (
            <TextField
              key={index}
              placeholder={`Todo Item ${index + 1}`}
              value={item.text}
              onChange={(e) => handleTodoChange(index, e.target.value)}
              fullWidth
              margin="normal"
            />
          ))}
          <Button variant="outlined" onClick={addTodoItem}>
            + Add Todo Item
          </Button>
        </Box>
      ) : (
        <TextField
          label="Content"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}

      <FormControl fullWidth margin="normal">
        <InputLabel>Color</InputLabel>
        <Select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          label="Color"
        >
          {[
            "#ffffff",
            "#ffcc80",
            "#f8bbd0",
            "#b2dfdb",
            "#dcedc8",
            "#e6ee9c",
            "#80deea",
          ].map((option) => (
            <MenuItem key={option} value={option}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: option,
                  display: "inline-block",
                  marginRight: 1,
                }}
              />
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Add Note
      </Button>
    </Box>
  );
};

export default NoteForm;
