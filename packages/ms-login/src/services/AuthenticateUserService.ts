import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface RequestDTO {
  email: string;
  password: string;
}

class AuthenticateUsersService {
  public execute({ email, password }: RequestDTO): string {
    if (!password) return 'Invailid to acess token';

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      { roles: ['manage-vouchers', 'manage-channels'] },
      secret,
      {
        subject: email,
        expiresIn,
      },
    );

    return token;
  }
}

export default AuthenticateUsersService;
