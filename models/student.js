//import mongoose from 'mongoose';

//const studentSchema = new mongoose.Schema({
 // username: {
 //   type: String,
 //   required: true
 // },
 // course: {
 //   type: String,
 //   required: true
 // },
  //module: {
 //   type: String,
 //   required: true
 // }
//});

//export default mongoose.model('Student', studentSchema);

import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  course: { type: String, required: true },
  module: { type: String, required: true },
});

// Force explicit collection name to match your cluster resource: "students"
const Student = mongoose.model('Student', studentSchema, 'students');

export default Student;