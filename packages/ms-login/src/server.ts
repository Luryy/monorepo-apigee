import express from 'express';

import AuthenticateUserService from './services/AuthenticateUserService';

const app = express();

const routes = express.Router();

routes.post('/login', (request, response) => {
  const { email, password } = request.body;

  const authenticateUserService = new AuthenticateUserService();

  const responseAuth = authenticateUserService.execute({ email, password });

  if (typeof responseAuth !== 'string') {
    const { token, roles } = responseAuth;
    return response.json({
      token,
      roles,
    });
  }

  response.json({ error: response });
});

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Login microservice running'));
