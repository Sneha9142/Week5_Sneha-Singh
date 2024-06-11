// src/routers/index.ts
import { Router } from 'express';
import authRouter from './auth';
import shiftRouter from './shift';
import timesheetRouter from './timehseet';
import reportRouter from './report';

const router = Router();

router.use('/auth', authRouter);
router.use('/shift', shiftRouter);
router.use('/timesheet', timesheetRouter);
router.use('/report', reportRouter);

export default router;
