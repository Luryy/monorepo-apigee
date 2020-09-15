import express from 'express';

const app = express();

const routes = express.Router();


routes.get('/login', (request, response) => {
    return response.json({
        mensage: 'ok',
        ms: 'login'
    })
})

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Login microservice running'));

