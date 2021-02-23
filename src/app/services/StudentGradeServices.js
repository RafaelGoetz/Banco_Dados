import BaseServices from './BaseServices';
import { QueryTypes } from 'sequelize';


export default class StudentGradeService extends BaseServices {
  constructor() {
    super();
  }

  async get(value) {
    const result = await this.execute(
      `select * from aluno_nota where aluno_id=${value}`, QueryTypes.SELECT);
    return result.map((item) => {
    item.descricao = item.descricao.trim();
    return item;
    });
  }

  async show(student, grade) {
    const result = await this.execute(
      `select * from aluno_nota where aluno_id=${student} and id=${grade}`, QueryTypes.SELECT);
    return result.map((item) => {
    item.descricao = item.descricao.trim();
    return item;
    });

  }

  async create(studentId, nota, descricao, materiaId) {
    const result = await this.execute(
      `insert into aluno_nota (nota, descricao, aluno_id, materia_id) 
      values ('${nota}','${descricao}',${studentId},${materiaId}) returning *;`, QueryTypes.INSERT
      );

      return result;
  }
  
  async update(studentId, gradeId, nota, descricao, materiaId){
    const result = await this.execute(
      `update aluno_nota 
      set nota = ${nota},
      descricao = '${descricao}',
      materia_id = ${materiaId}
      where aluno_id= ${studentId} and id = ${gradeId} returning *`, 
      QueryTypes.UPDATE
      );

      return result;
  }

  async delete(studentId, gradeId) {
    await this.execute(
      `delete from aluno_nota where aluno_id = ${studentId} and id = ${gradeId}`,
      QueryTypes.DELETE
    );
  }

}