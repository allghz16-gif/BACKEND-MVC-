import { Router } from 'express';
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';
import { validateTodo, validateUpdateTodo } from '../middlewares/validator.js';

const router = Router();

router.get('/', getTodos);

// Langkah 10c: Route GET /:id sudah terpasang
router.get('/:id', getTodoById);

router.post('/', validateTodo, createTodo);
router.put('/:id', validateUpdateTodo, updateTodo);
router.delete('/:id', deleteTodo);

export default router;