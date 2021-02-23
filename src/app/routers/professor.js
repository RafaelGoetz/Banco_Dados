import { Router } from "express";
import ProfessorController from '../controllers/ProfessorController';

const routes = new Router();

routes.get('/professor', ProfessorController.index);
routes.get('/professor/:id', ProfessorController.show);
routes.post('/professor', ProfessorController.store);
routes.put('/professor/:id', ProfessorController.update);
routes.delete('/professor/:id', ProfessorController.delete);


export default routes;