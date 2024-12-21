const Quote = require("../models/Quote");

// Get all quotes
const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching quotes", error: err.message });
  }
};

// Get a single quote
const getQuoteById = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) return res.status(404).json({ message: "Quote not found" });
    res.status(200).json(quote);
  } catch (err) {
    res.status(500).json({ message: "Error fetching quote", error: err.message });
  }
};

// Create a new quote
const createQuote = async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (err) {
    res.status(500).json({ message: "Error creating quote", error: err.message });
  }
};

// Update an existing quote
const updateQuote = async (req, res) => {
  try {
    const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedQuote) return res.status(404).json({ message: "Quote not found" });
    res.status(200).json(updatedQuote);
  } catch (err) {
    res.status(500).json({ message: "Error updating quote", error: err.message });
  }
};

// Delete a quote
const deleteQuote = async (req, res) => {
  try {
    const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
    if (!deletedQuote) return res.status(404).json({ message: "Quote not found" });
    res.status(200).json({ message: "Quote deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting quote", error: err.message });
  }
};

module.exports = {
  getAllQuotes,
  getQuoteById,
  createQuote,
  updateQuote,
  deleteQuote,
};
