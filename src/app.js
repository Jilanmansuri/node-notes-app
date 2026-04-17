// src/app.js
const express    = require('express');
const NoteRouter = require("./routes/note.routes")

const app = express();

app.use(express.json());


app.use("/api/notes",NoteRouter)

module.exports = app;
