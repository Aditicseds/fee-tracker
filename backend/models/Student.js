// models/Student.js

const mongoose = require('mongoose');

// Define the schema for the student
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  feeStatus: { type: String, required: true, enum: ['Unpaid', 'Partially Paid', 'Fully Paid'] },
  totalFee: { type: Number, required: true },
  paidFee: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
