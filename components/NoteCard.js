import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const NoteCard = ({ note, onDeleteNote }) => {
  const handleTodoToggle = (index) => {
    note.todoItems[index].checked = !note.todoItems[index].checked;
  };

  return (
    <Card sx={{ backgroundColor: note.color || "#ffffff" }}>
      <CardContent>
        <Typography variant="h6">{note.title}</Typography>
        {note.isTodo ? (
          <List>
            {note.todoItems.map((item, index) => (
              <ListItem key={index}>
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleTodoToggle(index)}
                />
                <ListItemText
                  primary={item.text}
                  style={{
                    textDecoration: item.checked ? "line-through" : "none",
                  }}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>{note.content}</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="error"
          onClick={() => onDeleteNote(note.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default NoteCard;
