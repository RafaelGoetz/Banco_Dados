import ProfessorService from '../services/ProfessorService'
import {Sequelize, QueryTypes } from "sequelize";
import databaseConfig from "../../config/database";

const sequelize = new Sequelize(databaseConfig);
const service = new ProfessorService();

class ProfessorController {
  async index(request, response) {
    return response.json(await service.get())
  };

  async show(request, response){
    const { id } = request.params;
    return response.json(await service.show(id))
  }

  async store(request, response) {
    
    const { nome, idade, cidade, uf, pais, materiaId } = request.body;
    const result = await service.create (nome, idade, cidade, uf, pais, materiaId)

    response.json(result)
  }

  
  async update(request, response) {
    const { id } = request.params;
    const { nome, idade, status, turma_id, pcd, data_nascimento } = request.body;
    response.json(await service.update(id, nome, idade, status, turma_id, pcd, data_nascimento))
    
  }


  async delete(request, response) {
    const { id } = request.params;
    response.json(await service.delete(id)) 

    response.sendStatus(202);
  }

  
} 

export default new ProfessorController();