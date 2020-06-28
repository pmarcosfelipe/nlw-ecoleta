import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointController from './controller/PointController';
import ItemController from './controller/ItemController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointController = new PointController();
const itemController = new ItemController();

routes.get('/items', itemController.list);
routes.get('/points', pointController.list);
routes.get('/points/:id', pointController.show);

routes.post('/points', upload.single('image'), pointController.create);

export default routes;
