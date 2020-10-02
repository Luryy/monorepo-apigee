import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface RequestDTO {
  email: string;
  password: string;
}

interface ResponseDTO {
  token: string;
  roles: string[];
}

class AuthenticateUsersService {
  public execute({ email, password }: RequestDTO): ResponseDTO | string {
    if (!password) return 'Invailid to acess token';

    const { secret, expiresIn } = authConfig.jwt;

    const roles = ['manage-vouchers', 'manage-channels'];

    const token = sign({ roles }, secret, {
      subject: email,
      expiresIn,
    });

    return { token, roles };
  }
}

export default AuthenticateUsersService;
