import BaseServices from './BaseServices';
import { QueryTypes } from 'sequelize';


export default class ProfessorService extends BaseServices {
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from professor', QueryTypes.SELECT);
    return result
  }
  async show(value) {
    const result = await this.execute(`select * from professor a where a.id = ${value} `, QueryTypes.SELECT);
    return result;
  }
  async create(nome, idade, cidade, uf, pais, materiaId) {

    const result = await this.execute( 
      `insert into professor (nome, idade, cidade, uf, pais, materia_id)
            values ('${nome}',${idade},'${cidade}','${uf}','${pais}',${materiaId}) returning *`, 
      QueryTypes.INSERT
      );

      return result;
  }

  //Parei aqui
  
  async update(value, nome, idade, status, turma_id, pcd, data_nascimento){

    const result = await this.execute(
      `update aluno
      set nome='${nome}',
      idade='${idade}',
      status='${status}',
      turma_id='${turma_id}',
      pcd='${pcd}',
      data_nascimento='${data_nascimento}'

      where id = ${value} `, QueryTypes.UPDATE);

    return result;

  }

  async delete(value) {
    const result = await this.execute(`delete from aluno_telefone where aluno_id=${value}; 
    delete from aluno_nota where aluno_id=${value};
    delete from aluno where id=${value};`, QueryTypes.DELETE);
  }

}
