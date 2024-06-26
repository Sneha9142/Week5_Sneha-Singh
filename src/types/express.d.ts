// src/types/express.d.ts
// import { JwtPayload } from 'jsonwebtoken';

// declare module 'express-serve-static-core' {
//   interface Request {
//     user?: string | JwtPayload;
//   }
// }



// src/types/express.d.ts
import { JwtPayload } from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload & { id: string };
  }
}
