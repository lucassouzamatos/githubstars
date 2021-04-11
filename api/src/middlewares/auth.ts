import { Request, Response, NextFunction } from 'express';
import UnauthorizedError from '@common/responses/UnauthorizedError';
import { verify } from 'jsonwebtoken';

interface IToken {
  iat: number;
  exp: number;
  sub: string;
}

export default function authenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const header = request.headers.authorization;
  if (!header) {
    throw new UnauthorizedError('Authorization is missing');
  }

  const [, token] = header.split(' ');

  try {
    const decoded = verify(token, process.env.JWT_TOKEN as string);
    const { sub: id } = decoded as IToken;
    request.user = { id };

    return next();
  } catch {
    throw new UnauthorizedError('Authorization is failed');
  }
}
