import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  // construct a mongoose schema for the students collection in the database. 
const studentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  course: { type: String, required: true },
  module: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

const mockStudents = [
 { id: 1, username: "jburns", course: "information technology", module: "A001" },
 { id: 2, username: "rsmith", course: "political sciences", module: "C001" },
 { id: 3, username: "brown", course: "business administration", module: "D001" },
 { id: 4, username: "sjane", course: "information technology", module: "A001" },
 { id: 5, username: "miller", course: "education", module: "F003" },
 { id: 6, username: "afoxy", course: "mechatronics", module: "E002" },
 { id: 7, username: "pmcdonald", course: "architecture", module: "B101" },
 { id: 8, username: "sfraser", course: "art", module: "A611" }
];

// Root route
app.get('/', (req, res) => {
    res.status(200).json({ message: "hey! This is a test message." });
});

// Get all students
app.get('/api/students', (req, res) => {
    res.status(200).json(mockStudents);
});

// Get student by ID
app.get('/api/students/:id', (req, res) => {
    const parsedStudent = parseInt(req.params.id);

    if (isNaN(parsedStudent)) {
        return res.status(400).json({ error: "Invalid student ID" });
    }

    const student = mockStudents.find(s => s.id === parsedStudent);

    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
});

// POST new student function
app.post('/api/students', (req, res) => {

    const { username, course, module } = req.body;

    if (!username || !course || !module) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const newStudent = {
        id: mockStudents.length + 1,
        username,
        course,
        module
    };

    mockStudents.push(newStudent);

    res.status(201).json(newStudent);
});

// PATCH update student function
app.patch('/api/students/:id', (req, res) => {

    const parsedInt = parseInt(req.params.id);

    const student = mockStudents.find(s => s.id === parsedInt);

    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    const { username, course, module } = req.body;

    if (username) student.username = username;
    if (course) student.course = course;
    if (module) student.module = module;

    res.status(200).json(student);
});

//delete student function
app.delete('/api/students/:id', (req, res) => {

    const parsedInt = parseInt(req.params.id);

    const studentIndex = mockStudents.findIndex(s => s.id === parsedInt);

    if (studentIndex === -1) {
        return res.status(404).json({ error: "Student not found" });
    }

    const deletedStudent = mockStudents.splice(studentIndex, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });

});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//i think I got all of the functions working. 
//so yes it's working 
//I need to start work on my other project but i'm lazy and don't wana 
//but i have to do it 
