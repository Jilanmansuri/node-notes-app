const express = require("express");
const { createNote, createBulkNotes, getAllNotes, getNoteById, replaceNote, updateNote } = require("../controllers/note.controller");

const NoteRouter = express.Router();

// 1. POST /api/notes - Create a single note
NoteRouter.post("/", createNote);

// 2. POST /api/notes/bulk - Create multiple notes
NoteRouter.post("/bulk", createBulkNotes);

// 3. GET /api/notes - Get all notes
NoteRouter.get("/", getAllNotes);

// 4. GET /api/notes/:id - Get a single note by ID
NoteRouter.get("/:id", getNoteById);

// 5. PUT /api/notes/:id - Replace a note completely
NoteRouter.put("/:id", replaceNote);

// 6. PATCH /api/notes/:id - Update specific fields only
NoteRouter.patch("/:id", updateNote);

module.exports = NoteRouter;
