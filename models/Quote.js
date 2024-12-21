const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  author: { type: String, required: true },
  quote: { type: String, required: true },
},
{ collection: "quoteList" }
);

module.exports = mongoose.model("Quote", QuoteSchema);
