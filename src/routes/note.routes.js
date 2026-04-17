const express = require("express");
const { createNote, createBulkNotes, getAllNotes } = require("../controllers/note.controller");

const NoteRouter = express.Router();

// 1. POST /api/notes - Create a single note
NoteRouter.post("/", createNote);

// 2. POST /api/notes/bulk - Create multiple notes
NoteRouter.post("/bulk", createBulkNotes);

// 3. GET /api/notes - Get all notes
NoteRouter.get("/", getAllNotes);

module.exports = NoteRouter;
