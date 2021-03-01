import Sequelize, { Model } from 'sequelize';

class SchoolClass extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        code: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        started_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        finish_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'school',
        tableName: 'school_classes',
      }
    );

    return this;
  }
    static associate(models) {
    this.hasMany(models.Student, {
      as: 'students',
      foreingKey: 'school_class_id',
    });
    
    this.belongsToMany(models.Teacher, {
      as: 'teacher',
      foreingKey: 'school_class_id',
      through: 'teacher_school_classes',
    })  
  }
}

export default SchoolClass;
