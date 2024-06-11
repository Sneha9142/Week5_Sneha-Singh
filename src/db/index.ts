// src/db/index.ts
// import { Sequelize } from 'sequelize-typescript';
// import Employee from '../models/Employee';
// import Shift from '../models/Shift';
// import Timesheet from '../models/Timesheet';
// import Claims from '../models/Claims';

// const sequelize = new Sequelize({
//   database: process.env.DATABASE_URL,
//   dialect: 'postgres',
//   models: [Employee, Shift, Timesheet, Claims],
//   logging: false,
// });

// export { sequelize };

// src/db.ts
// import { Sequelize } from 'sequelize-typescript';
// import  {Employee}  from '../models/Employee';
// import  {Shift}  from '../models/Shift';
// import  {Timesheet} from '../models/Timesheet';
// import  {Claims}  from '../models/Claims';

// const sequelize = new Sequelize({
//   database: process.env.DATABASE_NAME,
//   dialect: 'postgres',
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   host: process.env.DATABASE_HOST,
//   port: Number(process.env.DATABASE_PORT),
//   models: [Employee, Shift, Timesheet, Claims],
//   logging: false,
// });

// export { sequelize };
// src/db.ts
import { Sequelize } from 'sequelize-typescript';
import Employee from '../models/Employee';
import Shift from '../models/Shift';
import Timesheet from '../models/Timesheet';
import Claims from '../models/Claims';

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  models: [Employee, Shift, Timesheet, Claims],
  logging: false,
});

export { sequelize };
