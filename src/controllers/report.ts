// src/controllers/report.ts
import { Request, Response } from 'express';
import { sequelize } from '../db';
import { QueryTypes } from 'sequelize';
import { Workbook } from 'exceljs';

export const generateReport = async (req: Request, res: Response) => {
  try {
    const reportData = await sequelize.query(`
      SELECT e.name, s.startTime, s.endTime, s.actualHours, e.assignedShiftHours
      FROM "Employees" e
      JOIN "Shifts" s ON e.id = s.employeeId
    `, { type: QueryTypes.SELECT });

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Report');

    worksheet.columns = [
      { header: 'Employee Name', key: 'name', width: 20 },
      { header: 'Start Time', key: 'startTime', width: 20 },
      { header: 'End Time', key: 'endTime', width: 20 },
      { header: 'Actual Hours', key: 'actualHours', width: 15 },
      { header: 'Assigned Shift Hours', key: 'assignedShiftHours', width: 20 },
    ];

    worksheet.addRows(reportData);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    // res.status(500).json({ error: error.message });
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
  }
};
