// src/app.ts
// src/app.ts
import express from 'express';
import { sequelize } from './db';
import router from './routers';

const app = express(); 
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
