"use client";
import { CssBaseline, Container } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Google Keep Clone</title>
      </head>
      <body>
        <CssBaseline />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
