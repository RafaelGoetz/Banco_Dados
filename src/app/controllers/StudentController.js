import StudentService from '../services/StudentServices'
import {Sequelize, QueryTypes } from "sequelize";
import databaseConfig from "../../config/database";

const sequelize = new Sequelize(databaseConfig);
const service = new StudentService();

class StudentController {
  async index(request, response) {
    response.json(await service.get())
  };
  async show(request, response){
    const { id } = request.params;
    response.json(await service.show(id))
  }

  async store(request, response) {
    
    const { nome, idade, turmaId, dataNascimento } = request.body;
    const result = await service.create(nome, idade, turmaId, dataNascimento)

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

export default new StudentController();