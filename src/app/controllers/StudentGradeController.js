import StudentGradeService from '../services/StudentGradeServices'
import {Sequelize, QueryTypes } from "sequelize";
import databaseConfig from "../../config/database";

const sequelize = new Sequelize(databaseConfig);
const service = new StudentGradeService();

class StudentGradeController {

  async index(request, response) {
    const { studentId } = request.params;
    return response.json(await service.get(studentId));
  }

  async show (request, response) {
    const { studentId, gradeId } = request.params;
    const result = await service.show(studentId, gradeId);

    return response.json(result)

  }
  async store(request, response) {

    const { studentId } = request.params;
    const { nota, descricao, materiaId } = request.body;
    const result = await service.create(studentId, nota, descricao, materiaId);

    return response.json(result)

  }
 
  async update(request, response) {

    const { studentId, gradeId } = request.params;
    const { nota, descricao, materiaId } = request.body;
    const result = await service.update(
      studentId, 
      gradeId,  
      nota, 
      descricao, 
      materiaId);

    return response.json(result)

  }

  async delete(request, response) {
    const { studentId, gradeId } = request.params;
    await service.delete(studentId, gradeId);

    return response.sendStatus(202);
  }

  
} 

export default new StudentGradeController();