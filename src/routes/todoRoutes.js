import express from 'express';
import ToDoController from '../controllers/todoController.js';

const router = express.Router();

router.get('/', ToDoController.listarTasks);
router.post('/', ToDoController.criar);
router.get('/:id', ToDoController.listarPorId);
router.put('/:id', ToDoController.atualizar);
router.delete('/:id', ToDoController.deletar);

export default router;