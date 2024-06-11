// src/models/Timesheet.ts
import { Table, Column, Model, DataType, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import Employee from './Employee';
import Shift from './Shift';

@Table({
  tableName: 'timesheets',
  timestamps: false,
})
class Timesheet extends Model<Timesheet> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  employeeId!: string;

  @ForeignKey(() => Shift)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  shiftId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  projectName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  taskName!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  fromDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  toDate!: Date;
}

export default Timesheet;
