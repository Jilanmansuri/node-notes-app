const express = require("express");
const { createNote } = require("../controllers/note.controller");

const NoteRouter = express.Router();

// 1. POST /api/notes - Create a single note
NoteRouter.post("/", createNote);

module.exports = NoteRouter;
