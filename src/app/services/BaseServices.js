import Sequelize from 'sequelize';
import databaseconfig from '../../config/database';

export default class BaseServices {
  constructor(){
    this.sequelize = new Sequelize(databaseconfig);
  }
  async execute (sql, type) {
    const result = await this.sequelize.query(sql, { type });
    return result;
  }
}