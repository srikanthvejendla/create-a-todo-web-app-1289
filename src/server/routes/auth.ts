import { Router } from 'express';
import { z } from 'zod';

const router = Router();

// Placeholder for Supabase auth integration
router.post('/register', async (req, res) => {
  // Registration handled on frontend via Supabase
  res.status(501).json({ error: 'Register via frontend/Supabase' });
});

router.post('/login', async (req, res) => {
  // Login handled on frontend via Supabase
  res.status(501).json({ error: 'Login via frontend/Supabase' });
});

router.post('/forgot-password', async (req, res) => {
  // Password reset handled on frontend via Supabase
  res.status(501).json({ error: 'Forgot password via frontend/Supabase' });
});

router.post('/reset-password', async (req, res) => {
  // Password reset handled on frontend via Supabase
  res.status(501).json({ error: 'Reset password via frontend/Supabase' });
});

export default router;
