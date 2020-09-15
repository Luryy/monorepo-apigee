import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface RequestDTO {
  email: string;
  password: string;
}

interface Response {
  user: string;
  token: string;
}

class AuthenticateUsersService {
  public execute({ email, password }: RequestDTO): string {

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: email,
      expiresIn,
    });

    return token;
  }
}

export default AuthenticateUsersService;
