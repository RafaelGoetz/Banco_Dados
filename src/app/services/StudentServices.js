import BaseServices from './BaseServices';
import { QueryTypes } from 'sequelize';


export default class StudentService extends BaseServices {
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from aluno', QueryTypes.SELECT);
    return result.map((item) => {
      item.nome = item.nome.trim();
      return item;
    });
  }
  async show(value) {
    const result = await this.execute(`select * from aluno a where a.id = ${value} `, QueryTypes.SELECT);
    return result.map((item) => {
      item.nome = item.nome.trim();
      return item;
    });
  }

  async create(nome, idade, turmaId, dataNascimento) {

    const result = await this.execute(
      `insert into aluno (nome, idade, turma_id, data_nascimento)
            values ('${nome}','${idade}','${turmaId}','${dataNascimento}') returning *`, 
      QueryTypes.INSERT
      );

      return result;
  }
  
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

