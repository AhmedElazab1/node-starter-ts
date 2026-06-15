import express from 'express';
import authRoutes from './auth';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

router.use('/auth', authRoutes);

export default router;
