// src/models/Shift.ts
import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, Default, AllowNull } from 'sequelize-typescript';
import Employee from './Employee';

@Table({
  tableName: 'shifts',
  timestamps: false,
})
class Shift extends Model<Shift> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @ForeignKey(() => Employee)
  @AllowNull(false)
  @Column(DataType.UUID)
  employeeId!: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  startTime!: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  endTime!: Date | null;

  // other columns...

  @Column(DataType.FLOAT)
  get actualHours(): number {
    if (!this.endTime) {
      return 0;
    }
    const duration = (this.endTime.getTime() - this.startTime.getTime()) / (1000 * 60 * 60);
    return parseFloat(duration.toFixed(2));
  }
}

export default Shift;
