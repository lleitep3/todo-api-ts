import { Router } from 'express';
import controller from './controller';

const router = Router();

router.get('/', controller.getTodo);

router.post('/', controller.createTodo);

router.patch('/:id', controller.updateTodo);

router.delete('/:id', controller.deleteTodo);

export default router;
