const express = require("express");
const { createNote, createBulkNotes } = require("../controllers/note.controller");

const NoteRouter = express.Router();

// 1. POST /api/notes - Create a single note
NoteRouter.post("/", createNote);

// 2. POST /api/notes/bulk - Create multiple notes
NoteRouter.post("/bulk", createBulkNotes);

module.exports = NoteRouter;
