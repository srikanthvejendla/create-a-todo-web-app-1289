import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: { id: string; email: string };
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid Authorization header' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    if (typeof payload === 'object' && payload.sub && payload.email) {
      req.user = { id: payload.sub as string, email: payload.email as string };
      next();
    } else {
      throw new Error('Invalid token payload');
    }
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}
