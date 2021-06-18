import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     next();
//   }
// }

export async function LoggerMiddleware(req, res, next) {
    let start = Date.now();
    await next();
    let rs =  Date.now() - start;
    console.log('Request-->',req.url,':',req.method,'rs:',rs,'ms');

  };