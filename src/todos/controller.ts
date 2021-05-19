import { RequestHandler } from 'express';
import { TodoService } from './service';

export const createTodo: RequestHandler = (req, res) => {
  const text = (req.body as { text: string }).text;

  const newTodo = TodoService.save({ text });

  res.status(201).json({ success: true, data: newTodo });
};

export const getTodo: RequestHandler = (req, res) => {
  res.json({ success: true, data: TodoService.findAll() });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
  const { id } = req.params;
  const { text } = req.body as { text: string };

  const todo = TodoService.save({ id, text });

  if (!todo) {
    throw new Error(`Unable to update "${id}"`);
  }

  res.status(200).json({
    success: true,
    data: todo,
  });
};

export const deleteTodo: RequestHandler = (req, res) => {
  const { id } = req.params;

  const todoWasDeleted = TodoService.deleteTodo(id);

  if (!todoWasDeleted) {
    throw new Error(`Unable to delete todo "${id}"`);
  }

  res.status(200).json({
    success: true,
  });
};

export default {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
