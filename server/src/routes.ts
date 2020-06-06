import express from 'express';

import PointController from './controller/PointController';
import ItemController from './controller/ItemController';

const routes = express.Router();
const pointController = new PointController();
const itemController = new ItemController();

routes.get('/items', itemController.list);

routes.post('/points', pointController.create);
routes.post('/points', pointController.list);
routes.get('/points/:id', pointController.show);

export default routes;
