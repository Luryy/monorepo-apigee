import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppException from '../exceptions/AppException';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
  roles: string[];
}

function checker(arr: string[], target: string[]): boolean {
  return target.every(v => arr.includes(v));
}

export default function hasPermission(authRoles: string[]) {
  return (request: Request, response: Response, next: NextFunction): void => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppException('JWT is missing', 401, 'EmptyJWT');
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = verify(token, 'd3a8ac5c61ea75eb433df7011bc419e5');
      const { roles } = decoded as TokenPayload;

      if (!checker(roles, authRoles)) throw new Error();
      next();
    } catch {
      throw new AppException('Unauthorized', 401, 'Unauthorized');
    }
  };
}
