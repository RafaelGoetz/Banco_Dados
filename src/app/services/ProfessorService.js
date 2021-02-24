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
  
  async update(id, nome, idade, cidade, uf, pais, materiaId){

    const result = await this.execute(
      `update professor
      set nome='${nome}',
      idade=${idade},
      cidade='${cidade}',
      uf='${uf}',
      pais='${pais}',
      materia_id=${materiaId}

      where id = ${id} returning *`, QueryTypes.UPDATE);

    return result;

  }

  async delete(value) {
    const result = await this.execute(`
    delete from professor where id=${value};`, QueryTypes.DELETE);
  }

}
