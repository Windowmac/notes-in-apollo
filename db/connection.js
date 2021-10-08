require('dotenv').config();
const mongoose = require('mongoose');
const connection = mongoose.connect(process.env.MONGODB_URI);

const { Schema } = mongoose;

const noteSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  body:   String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = {connection, Note};