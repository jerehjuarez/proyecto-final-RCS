const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  mensaje: {
    type: String,
    required: true,
    trim: true
  }
})

const ContactModel = mongoose.model("Contact", ContactSchema)

module.exports = ContactModel