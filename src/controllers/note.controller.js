// src/controllers/note.controller.js

const Note = require("../models/note.model"); // model import

const createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and Content are required",
        data: null,
      });
    }

    const newNote = new Note(req.body);
    const savedNote = await newNote.save();

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: savedNote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const createBulkNotes = async (req, res) => {
  const { notes } = req.body;

  try {
    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Notes array is required and cannot be empty",
        data: null,
      });
    }

    const savedNotes = await Note.insertMany(notes);

    res.status(201).json({
      success: true,
      message: `${savedNotes.length} notes created successfully`,
      data: savedNotes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { createNote, createBulkNotes, getAllNotes };