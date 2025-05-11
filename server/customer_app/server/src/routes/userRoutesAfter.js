import express from 'express';
const userRouter = express.Router();
import { getUsers, createUser, updateUser, deleteUser,getUserById } from '../controllers/userControllerAfter.js';

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter