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

// DELETE user by id
router.delete('/:id', async (req, res) => {
  try {
    const user = await Student.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Deleted', user });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid ID' });
  }
});

// PUT update user by id
router.put('/:id', async (req, res) => {
  const body = req.body || {};
  const { username, course, module } = body;

  if (!username && !course && !module) {
    return res.status(400).json({ message: 'At least one field required: username, course, module' });
  }

  try {
    const user = await Student.findByIdAndUpdate(req.params.id, { username, course, module }, { new: true, runValidators: true });
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid ID or data' });
  }
});

// PATCH partial update user by id
router.patch('/:id', async (req, res) => {
  const body = req.body || {};

  if (Object.keys(body).length === 0) {
    return res.status(400).json({ message: 'At least one field required' });
  }

  try {
    const user = await Student.findByIdAndUpdate(req.params.id, body, { new: true, runValidators: true });
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid ID or data' });
  }
});

export default router;