// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import User from "../models/User";
// import { JWT_SECRET, JWT_EXP } from "../config/database";

// interface ITokenPayload {
//   _id: string;
//   username: string;
// }

// export const authenticate = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     // first checking token is header
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       res
//         .status(401)
//         .json({ message: "not authorized , missing authorization headers" });
//       return;
//     }
//     //second format
//     const [_, token] = authHeader.split(" ");
//     console.log(token);

//     // user id extract

//     const decodedToken = jwt.verify(token, JWT_SECRET); //as ITokenPayload
//     const { _id } = decodedToken;
//     const user = await User.findById(_id);

//     if (!user) {
//       return next({
//         status: 401,
//         message: "not authorized,missing auth headers",
//       });
//     }
//     // update rquest w/h the user
//     req.user = user;

//     console.log(decodedToken);

//     next();
//   } catch (err) {
//     console.log(err);
//     return next({
//       status: 401,
//       message: "invalid signature",
//     });
//   }
// };
