// src/routers/report.ts
import { Router } from 'express';
import { generateReport } from '../controllers/report';
import authenticateJWT from '../middlewares/auth';

const router = Router();

router.get('/report', authenticateJWT, generateReport);

export default router;
