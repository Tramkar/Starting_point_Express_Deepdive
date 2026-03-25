import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  module: {
    type: String,
    required: true
  }
});

export default mongoose.model('Student', studentSchema);