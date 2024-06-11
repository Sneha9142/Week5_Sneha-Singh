import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Employee from '../models/Employee';

export const register = async (req: Request, res: Response) => {
  const { name, email, password, assignedShiftHours, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const employee = await Employee.create({
      name,
      email,
      password: hashedPassword,
      assignedShiftHours,
      role,
    } as Employee); // Type assertion here
    res.status(201).json(employee);
  } catch (error) {
    // Type assertion to Error
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unexpected error occurred' });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const employee = await Employee.findOne({ where: { email } });
    if (!employee || !(await bcrypt.compare(password, employee.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: employee.id, role: employee.role }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    // Type assertion to Error
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
};
