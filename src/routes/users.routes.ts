import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/users.controller'; // Import the controller methods

const router = express.Router();

// Create a new user
router.post('/create', createUser);

// Get all users
router.get('/get-all', getAllUsers);

// Get a single user by ID
router.get('/:id', getUserById);

// Update a user by ID
router.put('/:id', updateUserById);

// Delete a user by ID
router.delete('/:id', deleteUserById);

export const userRoutes = router;
