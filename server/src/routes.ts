import express from 'express';

import PointsController from './controller/pointsController';
import ItensController from './controller/itensController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

routes.get('/items', itensController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;