import Student from '../models/student.js';

// GET all
export const getUsers = async (req, res) => {
  try {
    const users = await Student.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// GET by ID
export const getUserById = async (req, res) => {
  try {
    const user = await Student.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "Not found" });
    }

    res.status(200).json(user);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
};

// POST
export const createUser = async (req, res) => {
  try {
    const { username, course, module } = req.body;

    if (!username || !course || !module) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newUser = new Student({ username, course, module });
    await newUser.save();

    res.status(201).json(newUser);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};