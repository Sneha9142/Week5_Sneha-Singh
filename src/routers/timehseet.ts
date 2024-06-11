// src/routers/timesheet.ts
import { Router } from 'express';
import { createTimesheetEntry}  from '../controllers/timesheet';
import authenticateJWT from '../middlewares/auth';

const router = Router();

router.post('/', authenticateJWT, createTimesheetEntry);

export default router;
