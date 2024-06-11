// // src/models/Employee.ts
// import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../db';

// class Employee extends Model {
//   public id!: string;
//   public name!: string;
//   public email!: string;
//   public password!: string;
//   public assignedShiftHours!: number;
//   public role!: 'SuperAdmin' | 'Manager' | 'Employee';
// }

// Employee.init({
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   assignedShiftHours: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   role: {
//     type: DataTypes.ENUM('SuperAdmin', 'Manager', 'Employee'),
//     allowNull: false,
//   },
// }, {
//   sequelize,
//   modelName: 'Employee',
// });

// export default {Employee};


// src/models/Employee.ts
import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName: 'employees',
  timestamps: false
})
export class Employee extends Model<Employee> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  assignedShiftHours!: number;

  @Column({
    type: DataType.ENUM('SuperAdmin', 'Manager', 'Employee'),
    allowNull: false
  })
  role!: string;
}

export default Employee;
