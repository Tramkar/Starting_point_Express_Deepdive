import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/users.js';



dotenv.config(); // Load environment variables first

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: "API running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






// import express from 'express';
//import dotenv from 'dotenv';
//import mongoose from 'mongoose';

//mongoose.connect(process.env.MONGO_URI)
//  .then(() => console.log("MongoDB connected"))
//  .catch(err => console.error("MongoDB connection error:", err));

//dotenv.config();
//const app = express();

//const PORT = process.env.PORT || 3000;

//app.use(express.json()); // allows JSON body in POST requests

// Mock student data
//const mockStudents = [
//  { id: 1, username: "jburns", course: "information technology", module: "A001" },
 // { id: 2, username: "rsmith", course: "political sciences", module: "C001" },
 // { id: 3, username: "jbrown", course: "business administration", module: "D001" },
 // { id: 4, username: "sjane", course: "information technology", module: "A001" },
 // { id: 5, username: "mmiller", course: "education", module: "F003" },
 // { id: 6, username: "afoxy", course: "mechatronics", module: "E002" },
 // { id: 7, username: "pmcdonald", course: "architecture", module: "B101" },
 // { id: 8, username: "sfraser", course: "art", module: "A611" }
//];

// Test route
//app.get('/', (req, res) => {
  //res.status(200).json({ message: "hey! This is a test message." });
//});


// GET all students
//app.get('/api/users', (req, res) => {
  //res.status(200).json(mockStudents);
//});


// GET student by ID
//app.get('/api/users/:id', (req, res) => {

  //const parsedId = parseInt(req.params.id);

  //if (isNaN(parsedId)) {
    //return res.status(400).json({ error: "Invalid student ID" });
  //}

 // const student = mockStudents.find(s => s.id === parsedId);
//
 // if (!student) {
 //   return res.status(404).json({ error: "Student not found" });
//  }

 // res.status(200).json(student);
//});


// POST - Add new student
//app.post('/api/users', (req, res) => {

  //const { username, course, module } = req.body;

  //if (!username || !course || !module) {
    //return res.status(400).json({ error: "All fields are required" });
  //}

 // const newStudent = {
 //   id: mockStudents.length + 1,
 //   username,
 //   course,
 //   module
 // };

//  mockStudents.push(newStudent);

//  res.status(201).json({
//    message: "Student added successfully",
 //   student: newStudent
 // });
//});


//app.listen(PORT, () => {
 // console.log(`Server is running on port ${PORT}`);
//});