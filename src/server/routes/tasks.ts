import { Router } from 'express';
import { z } from 'zod';

const router = Router();

// Placeholder: Implement with Supabase client or pg client
router.get('/', async (req, res) => {
  // TODO: Fetch tasks for authenticated user
  res.status(200).json([]);
});

router.post('/', async (req, res) => {
  // TODO: Create new task
  res.status(201).json({});
});

router.put('/:id', async (req, res) => {
  // TODO: Update task
  res.status(200).json({});
});

router.delete('/:id', async (req, res) => {
  // TODO: Delete task
  res.status(204).send();
});

export default router;
