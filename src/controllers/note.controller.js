// src/controllers/note.controller.js

const Note = require("../models/note.model"); // model import

const createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    // validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and Content are required",
        data: null,
      });
    }

    // create note
    const newNote = new Note(req.body);

    // save to DB
    const savedNote = await newNote.save();

    // success response
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

module.exports = { createNote };