import express from 'express';

const app = express();

const routes = express.Router();


routes.get('/private', (request, response) => {
    return response.json({
        mensage: 'ok',
        ms: 'private'
    })
})

app.use(express.json());
app.use(routes);

app.listen(3334, () => console.log('Private microservice running'));

