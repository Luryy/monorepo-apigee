import express from 'express';

import AuthenticateUserService from './services/AuthenticateUserService';

const app = express();

const routes = express.Router();


routes.post('/login', (request, response) => {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = authenticateUserService.execute({email, password});

    return response.json({
        token
    })
})

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Login microservice running'));

