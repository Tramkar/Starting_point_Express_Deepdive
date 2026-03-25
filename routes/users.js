import express from 'express';
import Student from '../models/student.js';

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await Student.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET user by id
router.get('/:id', async (req, res) => {
  try {
    const user = await Student.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid ID' });
  }
});

// POST create user
router.post('/', async (req, res) => {
  const body = req.body || {};
  const { username, course, module } = body;

  if (!username || !course || !module) {
    return res.status(400).json({ message: 'All fields required: username, course, module' });
  }

  try {
    const newUser = new Student({ username, course, module });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;