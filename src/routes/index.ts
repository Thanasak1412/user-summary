import express from 'express';

import userRouter from './userRoutes.js';

const router = express.Router();

// Health check route
router.get('/', (_req, res) => {
  res.send('Health check');
});

// User routes
router.use('/users', userRouter);

export default router;
