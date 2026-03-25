import express from 'express';
import User from '../models/User.js'; // make sure this path is correct

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // fetch all users
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;







//import express from 'express';
//import {
//  getUsers,
//  getUserById,
//  createUser
//} from '../controllers/userController.js';

//const router = express.Router();

//router.get('/', getUsers);
//router.get('/:id', getUserById);
//router.post('/', createUser);

//export default router;