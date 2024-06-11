// src/controllers/timesheet.ts
import { Request, Response } from 'express';
import Timesheet from '../models/Timesheet';
import { Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/types/utils';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  };
}

export const createTimesheet = async (req: AuthenticatedRequest, res: Response) => {
  const { shiftId, projectName, taskName, fromDate, toDate } = req.body;

  try {
    const timesheet = await Timesheet.create({
      employeeId: req.user.id,
      shiftId,
      projectName,
      taskName,
      fromDate,
      toDate,
    } as Optional<Timesheet, NullishPropertiesOf<Timesheet>>);
    res.status(201).json(timesheet);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unexpected error occurred' });
    }
  }
};
