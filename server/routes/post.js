import express from 'express';
const router = express.Router();
import { getPost, createPost, UpdatePost, deletePost, likePost } from '../controllers/post.js'


router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id', UpdatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)

export default router;