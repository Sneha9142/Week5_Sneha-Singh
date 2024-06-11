// // src/models/Claims.ts
// import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../db';
// import Employee from './Employee';

// class Claims extends Model {
//   public id!: string;
//   public key!: string;
//   public value!: string;
//   public employeeId!: string;
// }

// Claims.init({
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   key: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   value: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   employeeId: {
//     type: DataTypes.UUID,
//     references: {
//       model: Employee,
//       key: 'id',
//     },
//   },
// }, {
//   sequelize,
//   modelName: 'Claims',
// });

// Claims.belongsTo(Employee, { foreignKey: 'employeeId' });

// export default Claims;

// src/models/Claims.ts
import { Table, Column, Model, DataType, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import Employee from './Employee';

@Table({
  tableName: 'claims',
  timestamps: false
})
class Claims extends Model<Claims> {
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
  key!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  value!: string;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  employeeId!: string;
}

export default Claims;
