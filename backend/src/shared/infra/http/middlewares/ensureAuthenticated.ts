import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, process.env.APP_JWT_SECRET || '') as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByID(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    request.user = {
      id: user_id
    }

    next();
  } catch {
    throw new AppError('Invalid token!');
  }
}