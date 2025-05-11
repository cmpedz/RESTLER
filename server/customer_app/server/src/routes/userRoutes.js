import express from 'express';
const userRouter = express.Router();
import { getUsers, createUser, updateUser, deleteUser, getUserById, getRandomUser } from '../controllers/userController.js';
import { authenticateToken, authorizeRoles } from '../middlewares/authMiddlewares.js';


userRouter.get('/random', authenticateToken, authorizeRoles('admin'), getRandomUser)
userRouter.get('/', authenticateToken, authorizeRoles('admin'), getUsers);
userRouter.get('/:id', authenticateToken, authorizeRoles('admin'), getUserById);
userRouter.post('/', authenticateToken, authorizeRoles('admin'), createUser);
userRouter.put('/:id', authenticateToken, authorizeRoles('admin'), updateUser);
userRouter.delete('/:id', authenticateToken, authorizeRoles('admin'), deleteUser);

export default userRouter