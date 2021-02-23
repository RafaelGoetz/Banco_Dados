import StudentGradeService from '../services/StudentGradeServices'
import {Sequelize, QueryTypes } from "sequelize";
import databaseConfig from "../../config/database";

const sequelize = new Sequelize(databaseConfig);
const service = new StudentGradeService();

class StudentGradeController {

  index(request, response) {
    const { studentId } = request.params;
    return response.json({studentId});
  }

  async show (request, response) {

  }
  async store(request, response) {

  }
 
  async update(request, response) {

  }

  async delete(request, response) {

  }

  
} 

export default new StudentGradeController();