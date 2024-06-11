// src/routers/shift.ts
import { Router } from 'express';
import { startShift, endShift } from '../controllers/shift';
import authenticateJWT from '../middlewares/auth';

const router = Router();

router.post('/start', authenticateJWT, startSh  ift);
router.post('/end', authenticateJWT, endShift);

export default router;
