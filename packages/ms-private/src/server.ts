import express from 'express';
import hasPermissions from './middlewares/hasPermission';
import Handler from './exceptions/Handler';

const app = express();

const routes = express.Router();

routes.get(
  '/private',
  hasPermissions(['manage-vouchers']),
  (request, response) => {
    return response.json({
      mensage: 'ok',
      ms: 'private',
    });
  },
);

app.use(express.json());
app.use(routes);

const handler = new Handler();

app.use(handler.handleError);

app.listen(3334, () => console.log('Private microservice running'));
