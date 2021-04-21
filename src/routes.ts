import {Router} from "express";
import { SetttingsController } from './controller/SettingsController';

const routes = Router();
/* 
  tipos de parametros
  routes params = rotas
  query params = filtros e buscas
  body params = post
*/
const settingsController = new SetttingsController();

routes.post("/settings", settingsController.create);

export { routes };