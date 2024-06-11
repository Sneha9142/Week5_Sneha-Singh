// src/controllers/shift.ts
import { Request, Response } from 'express';
import Shift from '../models/Shift';
import { NumberDataType, Op, Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/types/utils';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  };
}

interface ShiftCreationAttributes {
  employeeId: string;
  startTime: Date;
}

export const startShift = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const shift = await Shift.create({
      employeeId: req.user.id,
      startTime: new Date()
    } as Optional<Shift,NullishPropertiesOf<Shift>>);
    res.status(201).json(shift);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unexpected error occurred' });
    }
  }
};

export const endShift = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const shift = await Shift.findOne({
      where: {
        employeeId: req.user.id,
        endTime: {
          [Op.is]: null,
        },
      },
    });
    if (!shift) {
      return res.status(400).json({ message: 'No active shift found' });
    }
    shift.endTime = new Date();
    await shift.save();
    res.status(200).json(shift);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unexpected error occurred' });
    }
  }
};
